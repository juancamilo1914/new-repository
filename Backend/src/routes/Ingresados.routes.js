const {Router} = require('express')
const ingRoutes = Router()
const { obtenerNotification, eliminarNotificacion, nuevaNotification} = require('../controllers/Ingresados.controller')

ingRoutes.get("/obtenerNotification", obtenerNotification)
ingRoutes.post("/ingresarNotificacion", nuevaNotification)
ingRoutes.delete("/borrar/:id", eliminarNotificacion);

module.exports = ingRoutes