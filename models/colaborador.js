var db = require('./db_conexion.js');

var Colaborador = function(Colaborador){
    this.id = Colaborador.id;
    this.nombre = Colaborador.nombre;
    this.apellido = Colaborador.apellido;
};

Colaborador.getEstudiantes = function (result) {
    db.query("Select * from estudiante", function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null)
            }
            else{
                result(null, res);
            }
        });   
};

module.exports = Colaborador;
