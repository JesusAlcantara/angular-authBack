const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear servidor/aplicación express
const app = express();

// DB Connection
dbConnection();

// Directorio público
app.use( express.static('public') );

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );

app.listen( process.env, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});