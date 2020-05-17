const db = require("./db_conexion.js");
var Tarea = (Tarea) => {
  this.id = Tarea.id;
  this.titulo = Tarea.titulo;
  this.descripcion = Tarea.descripcion;
  this.fechaInicio = Tarea.fechaInicio;
  this.fechaFin = Tarea.fechaFin;
  this.responsable = Tarea.responsable;
  this.colaborador = Tarea.colaborador;
  this.status = Tarea.status;
};

Tarea.listTarea = (result) => {
  db.query(
    "Select Titulo, Descripcion, FechaInicio, FechaFin, c.Nombre, c.Nombre, s.Descripcion " +
      "from tarea as t INNER JOIN colaborador as c on t.idResponsable = c.idColaborador and t.idColaborador = c.idColaborador " +
      "INNER JOIN status as s on s.idStatus = t.idStatus",
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

Tarea.getTarea = (id, result) => {
  db.query(
    "Select Titulo, Descripcion, FechaInicio, FechaFin, c.Nombre, c.Nombre, s.Descripcion " +
      "from tarea as t INNER JOIN colaborador as c on t.idResponsable = c.idColaborador and t.idColaborador = c.idColaborador " +
      "INNER JOIN status as s on s.idStatus = t.idStatus " +
      "where t.idTarea = " +
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

Tarea.insertTarea = (body, result) => {
  db.query(
    "Insert into tarea " +
      "(Titulo, Descripcion, FechaInicio, FechaFin, idResponsable, idColaborador, idStatus) " +
      "values (?,?,?,?,?,?,?)",
    [
      body.titulo,
      body.descripcion,
      body.fechaInicio,
      body.fechaFin,
      body.responsable,
      body.colaborador,
      body.status,
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

Tarea.updateTarea = (body, result) => {
  db.query(
    "Update tarea set " +
      "Titulo = ? " +
      "Descripcion = ? " +
      "FechaInicio = ? " +
      "FechaFin = ? " +
      "idResponsable = ? " +
      "idColaborador = ? " +
      "idStatus = ? " +
      "where idTarea = ?;",
    [
      body.titulo,
      body.descripcion,
      body.fechaInicio,
      body.fechaFin,
      body.responsable,
      body.colaborador,
      body.status,
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

Tarea.deleteTarea = (id, result) => {
  db.query("Delete from tarea" + " where idTarea = " + id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Tarea;
