const express = require('express');
const ControladorProductos = require('../controladores/controladorProductos');
const routerProductos = express.Router();

routerProductos.get('/productos', ControladorProductos.todosLosProductos);
routerProductos.post('/productos/agregar', ControladorProductos.agregarProducto);
routerProductos.get('/productos/:id', ControladorProductos.obtenerProductoPorId);
routerProductos.put('/productos/:id', ControladorProductos.actualizarProducto); // Ruta para actualizar producto
routerProductos.delete('/productos/:id', ControladorProductos.eliminarProducto); // Ruta para eliminar producto

module.exports = routerProductos;
