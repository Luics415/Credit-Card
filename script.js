document.getElementById("number").addEventListener("focus", (e) => {
    document.getElementById("card").classList.remove('flip')
    document.getElementById("highlight").className = 'highlight__number'
})

document.getElementById("holder").addEventListener("focus", (e) => {
    document.getElementById("card").classList.remove('flip')
    document.getElementById("highlight").className = 'highlight__holder'
})

document.getElementById("expiration_month").addEventListener("focus", (e) => {
    document.getElementById("card").classList.remove('flip')
    document.getElementById("highlight").className = 'highlight__expire'
})

document.getElementById("expiration_year").addEventListener("focus", (e) => {
    document.getElementById("card").classList.remove('flip')
    document.getElementById("highlight").className = 'highlight__expire'
})

document.getElementById("cvv").addEventListener("focus", (e) => {
    document.getElementById("card").classList.add('flip')
    document.getElementById("highlight").className = 'highlight__cvv'
})

document.getElementById("cvv").addEventListener("focusout", (e) => {
    document.getElementById("card").classList.remove('flip')
    document.getElementById("highlight").className = 'hidden'
})

// === FUNCION DE DETECCION DE MARCA ===
function detectCardInfo(number) {
    if (number.length === 0) return { brand: 'default', type: 'CreditCard' };
    
    // Limpiamos los espacios en caso de que los haya
    const num = number.replace(/\s/g, '');
    
    // Identificadores (BINs) por marca
    if (/^4/.test(num)) return { brand: 'visa', type: 'VISA' }; 
    if (/^5[1-5]/.test(num)) return { brand: 'mastercard', type: 'MASTERCARD' };
    if (/^3[47]/.test(num)) return { brand: 'amex', type: 'AMEX' };
    if (/^589562/.test(num)) return { brand: 'naranja', type: 'NARANJA' };
    if (/^504/.test(num) || /^604/.test(num)) return { brand: 'cabal', type: 'CABAL' };
    if (/^3(?:0[0-5]|[68][0-9])/.test(num)) return { brand: 'diners', type: 'DINERS CLUB' };
    if (/^5018|5020|5038|6304|6759|6761|6763/.test(num)) return { brand: 'maestro', type: 'MAESTRO' };
    
    // Tarjetas regionales/locales
    if (/^6000/.test(num)) return { brand: 'cencosud', type: 'CENCOSUD' };
    if (/^5000/.test(num)) return { brand: 'cordobesa', type: 'CORDOBESA' };
    if (/^54/.test(num)) return { brand: 'nativa', type: 'NATIVA' }; 
    
    return { brand: 'default', type: 'CreditCard' };
}
// =====================================

let enteredCardNumbers = 0

document.getElementById("number").addEventListener("input", (e) => {
    const value = e.target.value;

    // 1. APLICAR LÓGICA DE COLOR Y MARCA
    const cardInfo = detectCardInfo(value);
    const cardEl = document.getElementById("card");
    const brandNameEl = document.getElementById("card-brand-name");
    const defaultSvgEl = document.getElementById("default-svg");
    const typeTextEl = document.getElementById("card-type-text");

    // Limpiamos clases antiguas de marca sin quitar la clase base 'card' ni 'flip'
    cardEl.className = cardEl.className.replace(/\bbrand-[a-zA-Z0-9-]+\b/g, '').trim(); 

    if (cardInfo.brand !== 'default') {
        cardEl.classList.add(`brand-${cardInfo.brand}`);
        if(defaultSvgEl) defaultSvgEl.style.display = 'none';
        if(brandNameEl) {
            brandNameEl.style.display = 'block';
            brandNameEl.innerText = cardInfo.brand.toUpperCase();
        }
    } else {
        if(defaultSvgEl) defaultSvgEl.style.display = 'block';
        if(brandNameEl) {
            brandNameEl.style.display = 'none';
            brandNameEl.innerText = '';
        }
    }
    
    if(typeTextEl) typeTextEl.innerText = cardInfo.type;


    // 2. APLICAR LÓGICA ORIGINAL DE INSERCIÓN DE NÚMEROS
    // Prevenimos que el script falle si se ingresan más de 16 números accidentalmente
    if(value.length > 16) return;

    if(enteredCardNumbers > value.length) {
        document.getElementById('card_number').children[15 - (15 - value.length)].classList.remove('filed')
        document.getElementById('card_number').children[value.length].innerHTML = "#<br>"
    }
    else {
        if(value.length > 4 && value.length < 13) {
            document.getElementById('card_number').children[value.length - 1].innerText += "*"
        }else {
            document.getElementById('card_number').children[value.length - 1].innerText += value.slice(-1)
        }    

        document.getElementById('card_number').children[value.length - 1].classList.add('filed')
    }

    enteredCardNumbers = value.length;
})

document.getElementById("holder").addEventListener("input", (e) => {
    document.getElementById('card_holder').innerText = e.target.value
})

document.getElementById("cvv").addEventListener("input", (e) => {
    document.getElementById('card_cvv_field').innerText = Array(e.target.value.length+1).join("*")
})

document.getElementById("expiration_month").addEventListener("change", (e) => {
    document.getElementById('card_expires_month').innerText = e.target.value
})

document.getElementById("expiration_year").addEventListener("change", (e) => {
    document.getElementById('card_expires_year').innerText = e.target.value.slice(-2)
})