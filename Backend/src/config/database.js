const mongoose = require ("mongoose")
const url = ("mongodb://localhost:27017/notification")
mongoose
    .connect(url,{
        useNewUrlparser: true,
        useUnifiedTopology: true
    })
    .then (() => {
        console.log("base de datos en ejecucion");
    })
    .catch((error) => {
        console.log("error al conectar mira el error:" + error);
    });