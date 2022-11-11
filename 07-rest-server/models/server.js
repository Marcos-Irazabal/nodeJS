const express = require('express');
const cors = require('cors');
const { dbConnect } = require('../db/config.db');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.loginPath = '/api/auth';

        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    //endpoints de mi server:
    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.loginPath, require('../routes/auth'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

    async dbConnection(){
        await dbConnect()
    }

}




module.exports = Server;
