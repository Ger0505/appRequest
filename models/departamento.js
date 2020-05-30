const db = require("./db_conexion.js");

var Departamento = function (Departamento) {
  this.id = Departamento.id;
  this.descripcion = Departamento.descripcion; 
};

Departamento.listDepartamento = function (result) {
  db.query(
      "SELECT " +
      "IdDepartamento," +
      "Descripcion " +
      "FROM " +
      "Departamento " +
      "WHERE Status = 1",
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

Departamento.getDepartamento = function (id, result) {
  db.query(
    "SELECT " +
    "IdDepartamento," +
    "Descripcion " +
    "FROM " +
    "Departamento " +
    "WHERE Status = 1 AND IDDepartamento ="+id,
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

Departamento.insertDepartamento = function (body, result) {
    db.query(
    "INSERT INTO Departamento(Descripcion) " +
      "VALUES(?)",
    [
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

Departamento.updateDepartamento = function (body, result) {
  db.query(
    "UPDATE Departamento SET " +
      "DESCRIPCION = ? " +
      "WHERE IDDepartamento = "+body.id,
    [
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

Departamento.deleteDepartamento = function (id, result) {
  db.query(
    "UPDATE Departamento SET Status = 0 WHERE IDDepartamento = " + id,
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

module.exports = Departamento;
