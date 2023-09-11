const express = require('express');
const cors = require('cors');
const { connection } = require('./database/db');


const app = express();

// configurar puerto
const PORT = process.env.PORT || 2002;

// habilitar CORS
app.use(cors());

// lectura del body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas
app.use(('/'), require('./routes/index.routes')); // despues armar un archivo de rutas en especifico

// arracancamos el server
app.listen(PORT, function() {
    console.log('Corriendo server en el puerto:', PORT);
    console.log('SISTEMAS DE DEPORTES');
    
    connection.sync({ force: false}).then(() =>{
        console.log('Base de Datos conectada correctamente');
    }).catch(error => {
        console.log('!!!ERROR EN CONECTAR LA BASE DE DATOS');
        console.log(error);
    });
});