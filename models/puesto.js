const db = require("./db_conexion.js");

var Puesto = (Puesto) => {
  this.id = Puesto.id;
  this.descripcion = Puesto.descripcion;
};

Puesto.listPuesto = (result) => {
  db.query("Select idPuesto, Descripcion from puesto", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Puesto.getPuesto = (id, result) => {
  db.query(
    "Select idPuesto, Descripcion from puesto " +
      "where idPuesto = " +
      id +
      ";",
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

Puesto.insertPuesto = (body, result) => {
  db.query(
    "Insert into puesto " + "(idPuesto, Descripcion) " + "values(?,?);",
    [body.id, body.descripcion],
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

Puesto.updatePuesto = (body, result) => {
  db.query(
    "update puesto " + "set " + "Descripcion = ? " + "where idPuesto = ?",
    [body.descripcion, body.id],
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

Puesto.deletePuesto = (id, result) => {
  db.query("Delete from puesto " + "where idPuesto = " + id + ";", function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Puesto;
