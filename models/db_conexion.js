var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'estudiantes'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("conexion correcta");
});

module.exports = connection;