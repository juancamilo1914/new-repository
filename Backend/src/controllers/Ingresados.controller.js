
const ingresadosMoodel = require('../models/ingresadosModel')
const respuesta = require('../helpers/helper');
const { eliminarNotificacion,obtenerIngresados } = require('../services/ingreso.service');

const controlador = {};

controlador.obtenerNotification = async (req, res) => {
    const listaIngresados = await ingresadosModel.find()
    res.json(listaIngresados)
}

controlador.nuevaNotification = async (req, res) => {
    try{
        const body = req.body;
        const nuevaNotification = new ingresadosMoodel(body)

        await nuevaNotification.save();

        respuesta.status = 200;
        respuesta.message = "Notificación Agregada Exitosamente"
        respuesta.data = body;
        
        res.status(200).send(respuesta)
    }catch(error){
        const errores = error.errors
        const errors = {}

        for (let i in errores){
            errors[i] = errores[i].message
        }

        respuesta.status = 500
        respuesta.message = "Ocurrio un error al guardar la informacion"
        respuesta.data = {errors}

        res.status(500).json(respuesta)
    }
}
controlador.eliminarNotificacion = async (req, res) => {
    const id = req.params.id;
    const response = await eliminarNotificacion(id);
    res.send(response);
};

module.exports = controlador