# Proyecto EJS Demo

![imagen](https://github.com/user-attachments/assets/c2d0379d-4641-496e-a737-295bf6b6868f)


Este proyecto es una demostración de cómo utilizar **EJS (Embedded JavaScript)** como motor de plantillas en una aplicación Node.js. En este ejemplo, he creado una página web simple que incluye un **hero**, una sección de **acerca de** y un **footer**. La estructura del proyecto está diseñada para mostrar cómo modularizar y reutilizar el código de las plantillas usando EJS.

##Demo proyecto 
- [ejecucion proyecto en vivo](https://stackblitz.com/edit/stackblitz-starters-fuewbr)

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas y archivos principales:

- **`views/`**: Contiene las plantillas EJS. Dentro de esta carpeta, la subcarpeta `partials/` incluye componentes reutilizables como el header y el footer.
- **`public/`**: Contiene archivos estáticos, como hojas de estilo CSS.
- **`app.js`**: Archivo principal que configura el servidor Express y el motor de plantillas EJS.

## Instalación y Configuración

Para poner en marcha el proyecto, sigue estos pasos:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu_usuario/ejs-demo.git
    cd ejs-demo
    ```

2. **Instala las dependencias**:

    Asegúrate de tener Node.js instalado. Luego, en la raíz del proyecto, ejecuta:

    ```bash
    npm install
    ```

3. **Ejecuta el servidor**:

    Una vez instaladas las dependencias, inicia el servidor con:

    ```bash
    node app.js
    ```

    El servidor estará disponible en `http://localhost:3000`.

## Cómo Funciona

El proyecto utiliza EJS para renderizar las vistas del lado del servidor. EJS permite insertar contenido dinámico en las plantillas y reutilizar componentes comunes mediante **includes**. En esta configuración, los componentes de la página, como el header y el footer, se mantienen en archivos separados y se integran en la plantilla principal.

### Componentes de la Vista

- **Header**: Muestra un mensaje de bienvenida en la parte superior de la página.
- **About**: Contiene información sobre el proyecto.
- **Footer**: Muestra el texto de copyright al final de la página.

### Estilos

El archivo `public/style.css` aplica estilos básicos a las secciones de la página, proporcionando un diseño simple y limpio.

## Recursos

Para profundizar en EJS y Express, te recomiendo revisar los siguientes recursos:

- [Documentación oficial de EJS](https://ejs.co/)
- [Guía oficial de Express](https://expressjs.com/es/)

## Contribuciones

Si deseas contribuir al proyecto, sigue las mejores prácticas de desarrollo y envía un pull request. Cualquier mejora o sugerencia será bien recibida.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT).

---

Para cualquier duda o ayuda adicional, no dudes en ponerte en contacto.


