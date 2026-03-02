🧠 ROLE / PERSONA

Actúa como un Senior Frontend Developer & UI/UX Designer con enfoque en:

- Clean Code
- Arquitectura frontend profesional
- Buenas prácticas
- Diseño moderno
- Experiencia de usuario pulida

Escribe código claro, modular, escalable y estructurado como si fuera parte de un producto real.

---

🎯 TASK

Voy a proporcionarte los archivos base del template.

Debes implementar una mini aplicación web moderna que invierta una cadena de texto ingresada por el usuario.

---

📁 PROJECT STRUCTURE (OBLIGATORIO)

La estructura debe ser profesional y separada:

- index.html
- styles.css
- script.js

⚠️ El CSS debe estar en styles.css
⚠️ No usar estilos inline
⚠️ No usar frameworks
⚠️ No usar librerías externas

Todo correctamente enlazado.

---

📋 FUNCTIONAL REQUIREMENTS

1) Debe existir un input donde el usuario escriba texto.
2) El texto invertido debe mostrarse en TIEMPO REAL mientras el usuario escribe.
3) La inversión SOLO debe ejecutarse cuando el texto tenga MÁS de 3 caracteres.
4) Si el texto tiene 3 caracteres o menos:
   - No debe mostrarse resultado.
   - El área de salida debe quedar en estado neutro.
5) No debe existir ningún botón.
6) La lógica debe ejecutarse usando el evento "input".
7) No debe recargarse la página.

Ejemplo:
Input: AI4Devs
Output: sveD4IA

---

📊 EXTRA FEATURE (OBLIGATORIO)

Además del texto invertido, debe mostrarse dinámicamente:

- Contador de palabras del resultado invertido.
- Contador de caracteres del resultado invertido.

Las métricas deben:

✔ Actualizarse en tiempo real  
✔ Estar visualmente integradas en la sección de salida  
✔ Tener diseño elegante y discreto  
✔ Desaparecer o resetearse si el texto tiene 3 caracteres o menos  

El conteo de palabras debe:
- Ignorar espacios múltiples
- No contar espacios vacíos como palabra

---

🎨 UI / UX REQUIREMENTS (MUY IMPORTANTE)

NO quiero una página básica con fondo blanco y un input simple.

La interfaz debe ser moderna, elegante y profesional.

Debe incluir:

• Layout centrado vertical y horizontalmente  
• Diseño tipo card o glassmorphism  
• Fondo con gradiente moderno o dark theme elegante  
• Tipografía limpia y profesional  
• Buena jerarquía visual  
• Espaciado adecuado  
• Responsive  

Debe contener:

1) Título atractivo (ej: “Reverse Text Generator”)
2) Texto explicativo UX:
   Ejemplo:
   “Ingrese un texto mayor a 3 caracteres para ver el resultado invertido en tiempo real.”
3) Input estilizado:
   - Bordes redondeados
   - Animación en focus
   - Transiciones suaves
   - Efectos hover sutiles
4) Sección de salida destacada:
   - Card secundaria o panel visual
   - Animación suave al aparecer el resultado
   - Fade-in o slide-up elegante
5) Sección de métricas (palabras y caracteres):
   - Diseño limpio y discreto
   - Alineación clara
   - Estética tipo badge o small stats panel

No sobrecargar el diseño.
Debe verse como un pequeño producto SaaS real.

---

⚙️ IMPLEMENTATION GUIDELINES

En index.html:
- Estructura semántica clara.
- Enlace correcto a styles.css.
- Enlace correcto a script.js.
- Separación clara entre:
  - Input
  - Resultado
  - Métricas

En styles.css:
- Código organizado.
- Uso de variables CSS si es necesario.
- Flexbox o Grid moderno.
- Animaciones suaves.
- Transiciones elegantes.
- Microinteracciones sutiles.

En script.js:
- Selección clara del DOM.
- Event listener "input".
- Validar longitud > 3.
- Función separada para:
  - Invertir texto
  - Contar palabras
  - Contar caracteres
- Actualizar DOM dinámicamente.
- Resetear estado cuando longitud <= 3.
- Separar lógica y manipulación del DOM.

---

🏁 GOAL

Crear una mini aplicación web moderna y profesional que:

✔ Invierta texto en tiempo real  
✔ Muestre contador de palabras  
✔ Muestre contador de caracteres  
✔ Respete condición de más de 3 caracteres  
✔ Tenga UI moderna y elegante  
✔ Esté correctamente estructurada en HTML, CSS y JS separados  
✔ Se vea como un producto real  

---

📤 OUTPUT FORMAT

Devuélveme:

1) index.html completo
2) styles.css completo
3) script.js completo

No incluyas explicación.
Solo devuelve los archivos finales listos para usar.