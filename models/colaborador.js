const db = require("./db_conexion.js");

var Colaborador = function (Colaborador) {
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
    "SELECT " +
      "IdColaborador," +
      "Nombre," +
      "Apellido1," +
      "Apellido2," +
      "FechaAlta," +
      "Usuario," +
      "Password," +
      "P.Descripcion AS Puesto," +
      "D.Descripcion AS Departamento " +
      "FROM " +
      "colaborador C " +
      "INNER JOIN puesto P ON P.IdPuesto = C.IdPuesto " +
      "INNER JOIN departamento D ON D.IdDepartamento = C.IdDepartamento " +
      "WHERE C.STATUS = 1",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Colaborador.getColaborador = function (id, result) {
  db.query(
    "SELECT " +
      "Nombre," +
      "Apellido1," +
      "Apellido2," +
      "FechaAlta," +
      "Usuario," +
      "Password," +
      "P.Descripcion AS Puesto," +
      "D.Descripcion AS Departamento" +
      " FROM " +
      "colaborador C " +
      "INNER JOIN puesto P ON P.IdPuesto = C.IdPuesto " +
      "INNER JOIN departamento D ON D.IdDepartamento = C.IdDepartamento " +
      "WHERE idColaborador = " +
      id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Colaborador.insertColaborador = function (body, result) {
  db.query(
    "INSERT INTO colaborador(Nombre,Apellido1,Apellido2,Usuario,Password,IdPuesto,IdDepartamento)" +
      "VALUES(?,?,?,?,?,?,?)",
    [
      body.nombre,
      body.apellido1,
      body.apellido2,
      body.usuario,
      body.password,
      body.puesto,
      body.departamento
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Colaborador.updateColaborador = function (body, result) {
  db.query(
    "UPDATE colaborador SET " +
      "NOMBRE = ?," +
      "APELLIDO1 = ?," +
      "APELLIDO2 = ?," +
      "USUARIO = ?," +
      "PASSWORD = ?," +
      "IDPUESTO = ?," +
      "IDDEPARTAMENTO = ?" +
      "WHERE IDCOLABORADOR =" +
      body.id,
    [
      body.nombre,
      body.apellido1,
      body.apellido2,
      body.usuario,
      body.password,
      body.puesto,
      body.departamento
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Colaborador.deleteColaborador = function (id, result) {
  db.query(
    "UPDATE colaborador SET STATUS= 0 WHERE IDCOLABORADOR = " + id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Colaborador.loggin = (body, result) => {
  db.query(
    "SELECT IF(c.`Usuario`=? and c.`Password`=?, true, false) as login," +
      "IF(c.`Usuario`=? and c.`Password`=?, c.`idColaborador`, 'none') as IdColaborador," +
      "IF(c.`Usuario`=? and c.`Password`=?, c.`Nombre`, 'none') as Nombre," +
      "IF(c.`Usuario`=? and c.`Password`=?, c.`Apellido1`,'none') as Apellido1," +
      "IF(c.`Usuario`=? and c.`Password`=?, c.`Apellido2`, 'none') as Apellido2," +
      "IF(c.`Usuario`=? and c.`Password`=?,d.`Descripcion`, 'none') as Departamento," +
      "IF(c.`Usuario`=? and c.`Password`=?, p.`Descripcion`, 'none') as Puesto " +
      "from COLABORADOR c " +
      "INNER JOIN PUESTO p ON p.IdPuesto = c.IdPuesto " +
      "INNER JOIN DEPARTAMENTO d ON d.IdDepartamento = c.IdDepartamento " +
      "GROUP BY login",
    [
      body.usuario,
      body.password,
      body.usuario,
      body.password,
      body.usuario,
      body.password,
      body.usuario,
      body.password,
      body.usuario,
      body.password,
      body.usuario,
      body.password,
      body.usuario,
      body.password
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Colaborador;
