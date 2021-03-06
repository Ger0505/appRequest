const db = require("./db_conexion.js");

var Puesto = function (Puesto) {
  this.id = Puesto.id;
  this.descripcion = Puesto.descripcion; 
};

Puesto.listPuesto = function (result) {
  db.query(
      "SELECT " +
      "IdPuesto," +
      "Descripcion " +
      "FROM " +
      "Puesto " +
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

Puesto.getPuesto = function (id, result) {
  db.query(
    "SELECT " +
    "IdPuesto," +
    "Descripcion " +
    "FROM " +
    "Puesto " +
    "WHERE Status = 1 AND IDPuesto ="+id,
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

Puesto.insertPuesto = function (body, result) {
    db.query(
    "INSERT INTO Puesto(Descripcion) " +
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

Puesto.updatePuesto = function (body, result) {
  db.query(
    "UPDATE Puesto SET " +
      "DESCRIPCION = ? " +
      "WHERE IDPuesto = "+body.id,
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

Puesto.deletePuesto = function (id, result) {
  db.query(
    "UPDATE Puesto SET Status = 0 WHERE IDPuesto = " + id,
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

module.exports = Puesto;
