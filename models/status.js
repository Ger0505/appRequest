const db = require("./db_conexion.js");

var Status = function (Status) {
  this.id = Status.id;
  this.nombre = Status.nombre;
  this.descripcion = Status.descripcion; 
};

Status.listStatus = function (result) {
  db.query(
      "SELECT " +
      "IdStatus," +
      "Nombre," +
      "Descripcion " +
      "FROM " +
      "Status " +
      "WHERE STATUS = 1",
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

Status.getStatus = function (id, result) {
  db.query(
    "SELECT " +
    "IdStatus," +
    "Nombre," +
    "Descripcion," +
    "FROM " +
    "Status " +
    "WHERE STATUS = 1 AND IDSTATUS ="+id,
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

Status.insertStatus = function (body, result) {
  db.query(
    "INSERT INTO STATUS(Nombre,Descripcion) " +
      "VALUES(?,?)",
    [
      body.nombre,
      body.descripcion
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

Status.updateStatus = function (body, result) {
  db.query(
    "UPDATE colaborador SET " +
      "NOMBRE = ?," +
      "DESCRIPCION = ? " +
      "WHERE IDCOLABORADOR = ?",
    [
      body.nombre,
      body.descripcion,
      body.id,
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

Status.deleteStatus = function (id, result) {
  db.query(
    "DELETE from status SET STATUS= 0 WHERE IDSTATUS = " + id,
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

module.exports = Status;
