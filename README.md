# Credit Card Animation UI

Una interfaz interactiva de tarjeta de crédito con animación, resaltado visual y actualización en tiempo real de los campos de número, titular, fecha de vencimiento y CVV.

## ✨ Descripción general

Este proyecto es una pequeña demostración de una interfaz moderna para una tarjeta de crédito, construida con HTML, CSS y JavaScript. Su objetivo es mostrar una experiencia visual atractiva y dinámica al completar los datos de una tarjeta, con una animación de giro al enfocar el campo del CVV y una respuesta inmediata a cada entrada del usuario.

La aplicación permite visualizar cómo se vería una tarjeta de crédito realista en una pantalla web, con estilos elegantes, efecto de resaltado y cambios de apariencia según la marca detectada en el número ingresado.

<img width="1920" height="957" alt="image" src="https://github.com/user-attachments/assets/fa823e3e-e524-43c3-aa5d-e65adcf5c99b" />
<img width="1920" height="960" alt="image" src="https://github.com/user-attachments/assets/a757b0c0-7cdb-473b-b2ca-eb41446c99b4" />
<img width="1920" height="957" alt="image" src="https://github.com/user-attachments/assets/5b633a3c-4a64-4f5a-9f82-d233d0e80985" />
<img width="1920" height="957" alt="image" src="https://github.com/user-attachments/assets/150079eb-95d5-41ce-b45d-028fa1049094" />
<img width="1920" height="996" alt="image" src="https://github.com/user-attachments/assets/e229f5fb-c46a-4b4c-a00e-c16295c7a34c" />


## 🎯 Funcionalidades

- Animación de giro de la tarjeta al seleccionar el campo CVV
- Resaltado visual del campo activo del formulario
- Detección automática de la marca de la tarjeta según el número ingresado
- Cambio dinámico del nombre de la marca visible en la tarjeta
- Actualización en tiempo real del número, titular y fecha de vencimiento
- Visualización del CVV con máscara de seguridad
- Diseño responsivo y adaptable a distintos tamaños de pantalla
- Estilos dinámicos por marca, con variantes visuales para distintas tarjetas

## 🧩 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla

## ▶️ Cómo ejecutar el proyecto

### Opción 1: abrir directamente

1. Abre el archivo `index.html` en tu navegador.
2. La interfaz funcionará de forma local sin necesidad de instalar dependencias.

### Opción 2: usar un servidor local

Si prefieres ejecutar el proyecto con un servidor local, puedes hacerlo con:

```bash
python -m http.server 8000
```

Luego abre en tu navegador:

```text
http://localhost:8000
```

## 📁 Estructura del proyecto

- `index.html`: estructura principal de la interfaz y el formulario
- `style.css`: estilos visuales, layout, animaciones y colores dinámicos
- `script.js`: lógica de interacción, actualización de la tarjeta y detección de marca
- `README.md`: documentación del proyecto

## 🧠 Cómo funciona

El formulario permite al usuario ingresar:

- número de tarjeta
- nombre del titular
- mes y año de vencimiento
- CVV

A medida que se escribe, la tarjeta se actualiza en tiempo real para reflejar los datos ingresados. Además, cuando el usuario enfoca el campo del CVV, la tarjeta gira para mostrar el lado trasero y revelar el campo de seguridad.

La lógica en JavaScript también detecta patrones de BIN para identificar marcas comunes y aplicar una apariencia visual distinta dependiendo de la tarjeta detectada.

## 🌎 Compatibilidad

Este proyecto está pensado para funcionar en navegadores modernos con soporte de HTML, CSS y JavaScript estándar. No requiere frameworks ni dependencias externas.

## 📝 Descripción corta para GitHub

Proyecto frontend de una tarjeta de crédito interactiva con animaciones, actualización visual en tiempo real y detección automática de la marca según el número ingresado.

## 🔧 Ideas futuras

- Agregar validaciones más robustas de número de tarjeta
- Soportar más marcas internacionales
- Añadir transiciones más avanzadas y microinteracciones
- Convertirlo en una mini aplicación con React o Vue
- Adaptarlo a un diseño de dashboard financiero o landing page

## 📌 Estado del proyecto

Este proyecto está en una etapa de demostración funcional y visual, ideal para practicar frontend, diseño de interfaces y lógica interactiva con JavaScript.
