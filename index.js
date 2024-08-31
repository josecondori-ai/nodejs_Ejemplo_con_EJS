const express = require('express');
const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Servir archivos estáticos
app.use(express.static('static'));

// Ruta principal
app.get('/', (req, res) => {
  const data = {
    title: 'Mi Página Web Modularizada',
    heroMessage: '¡Bienvenido a Nuestra Página!',
    aboutTitle: 'Sobre Nosotros',
    aboutText: 'Creamos soluciones innovadoras para el desarrollo web.',
    footerText: '© Todos los derechos reservados - 2024'
  };
  res.render('index', data);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
