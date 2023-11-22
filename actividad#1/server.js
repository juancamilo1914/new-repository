const express = require('express');
   const bodyParser = require('body-parser');

   const app = express();
   const port = 3000;

   // Configuración del body-parser para parsear JSON
   app.use(bodyParser.json());

   // Endpoint <link>POST</link> para guardar un item
   app.post('/items', (req, res) => {
     // Obtener los datos del body de la solicitud
     const { campo1, campo2, campo3, campo4 } = req.body;

     // Aquí puedes implementar la lógica para guardar los datos en una base de datos
     // Por ahora, simplemente mostraremos los datos en la consola
     console.log('Datos recibidos:', campo1, campo2, campo3, campo4);

     // Responder con un mensaje de éxito
     res.send('Item guardado correctamente');
   });

   // Iniciar el servidor
   app.listen(port, () => {
     console.log(`Servidor escuchando en http://localhost:${port}`);
   });