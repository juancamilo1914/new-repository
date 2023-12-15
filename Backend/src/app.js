const servidor = require('./config/server');
require('./config/database')

servidor.listen(servidor.get("port"), () => {
    console.log("El Servidor de encuentra en funcionamiento en el puerto 2800.");
})