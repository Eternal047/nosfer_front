//estoy probando chavales

// Importar el módulo necesario para manejar las solicitudes HTTP
const http = require('http');
// Importar el módulo necesario para manejar las solicitudes de la base de datos
const mysql = require('mysql');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nosfer_db'
});

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    // Verificar si la solicitud es una solicitud POST
    if (req.method === 'POST') {
        let body = '';
        // Recopilar los datos enviados en el cuerpo de la solicitud
        req.on('data', chunk => {
            body += chunk.toString();
        });
        // Procesar los datos enviados una vez que se han recopilado todos
        req.on('end', () => {
            // Convertir los datos enviados en un objeto JSON
            const data = JSON.parse(body);
            // Insertar los datos en la tabla de donantes
            connection.query('INSERT INTO donantes (nombres, apellidos, documento, tipo_sangre, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)', [data.nombres, data.apellidos, data.documento, data.tipo_sangre, data.fecha_nacimiento], (error, results, fields) => {
                if (error) {
                    // Si hay un error, enviar una respuesta con un código de estado 500 (Error interno del servidor)
                    res.statusCode = 500;
                    res.end('Error interno del servidor');
                } else {
                    // Si todo sale bien, enviar una respuesta con un código de estado 200 (OK)
                    res.statusCode = 200;
                    res.end('Datos almacenados correctamente');
                }
            });
        });
    } else {
        // Si la solicitud no es una solicitud POST, enviar una respuesta con un código de estado 405 (Método no permitido)
        res.statusCode = 405;
        res.end('Método no permitido');
    }
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
