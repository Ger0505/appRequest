var db = require('./db_conexion.js');

var Colaborador = function(Colaborador){
    this.id = Colaborador.id;
    this.nombre = Colaborador.nombre;
    this.apellido1 = Colaborador.apellido1;
    this.apellido2 = Colaborador.apellido2;
    this.fecha = Colaborador.fecha;
    this.usuario = Colaborador.usuario;
    this.password = Colaborador.password;
    this.puesto = Colaborador.puesto;
    this.departamento = Colaborador.departamento;
};

Colaborador.listColaborador = function (result) {
    db.query(
    "SELECT "
    +"Nombre,"
    +"Apellido1,"
    +"Apellido2,"
    +"FechaAlta,"
    +"Usuario,"
    +"Password,"
    +"P.Descripcion,"
    +"D.Descripcion "
    +"FROM "
    +"colaborador C "
    +"INNER JOIN puesto P ON P.IdPuesto = C.IdPuesto "
    +"INNER JOIN departamento D ON D.IdDepartamento = C.IdDepartamento "
    +"WHERE STATUS = 1",
    function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null)
            }
            else{
                result(null, res);
            }
        });   
};

Colaborador.getColaborador = function (id,result) {
    db.query(
    "SELECT "
    +"Nombre,"
    +"Apellido1,"
    +"Apellido2,"
    +"FechaAlta,"
    +"Usuario,"
    +"Password,"
    +"P.Descripcion,"
    +"D.Descripcion"
    +" FROM "
    +"colaborador C "
    +"INNER JOIN puesto P ON P.IdPuesto = C.IdPuesto "
    +"INNER JOIN departamento D ON D.IdDepartamento = C.IdDepartamento "
    +"WHERE idColaborador = "+id,
    function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null)
            }
            else{
                result(null, res);
            }
        });   
};

Colaborador.insertColaborador = function (body,result) {
    db.query("INSERT INTO colaborador(Nombre,Apellido1,Apellido2,FechaAlta,Usuario,Password,IdPuesto,IdDepartamento)"+
    "VALUES(?,?,?,?,?,?,?,?)",[body.nombre,body.ape1,body.ape2,body.fecha,body.usu,body.pass,body.puesto,body.dep],
    function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null)
            }
            else{
                result(null, res);
            }
        });   
};

Colaborador.updateColaborador = function (body,result) {
    db.query("UPDATE colaborador SET "
    +"NOMBRE = ?,"
    +"APELLIDO1 = ?,"
    +"APELLIDO2 = ?,"
    +"FECHAALTA = ?,"
    +"USUARIO = ?,"
    +"PASSWORD = ?,"
    +"IDPUESTO = ?,"
    +"IDDEPARTAMENTO = ?"
    +"WHERE IDCOLABORADOR = ?",
    [body.nombre,body.ape1,body.ape2,body.fecha,body.usu,body.pass,body.puesto,body.dep,body.id],
    function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null)
            }
            else{
                result(null, res);
            }
        });   
};

Colaborador.deleteColaborador = function (id,result) {
    db.query("UPDATE colaborador SET STATUS= 0 WHERE IDCOLABORADOR= "+id,
    function (err, res) {             
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
