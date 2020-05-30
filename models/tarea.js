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
  db.query("SELECT "+
    "Tar.IdTarea,"+
    "Tar.Titulo,"+
    "Sta.Nombre AS Status,"+
    "Tar.Descripcion,"+
    "CONCAT(Col1.Nombre, ' ' , Col1.Apellido1) AS Colaborador,"+
	  "CONCAT(Col2.Nombre, ' ' , Col2.Apellido1) AS Responsable "+
    "FROM tarea Tar "+
    "INNER JOIN colaborador Col1 ON Col1.IdColaborador = Tar.IdColaborador "+
    "INNER JOIN colaborador Col2 ON Col2.IdColaborador = Tar.IdResponsable "+
    "INNER JOIN STATUS Sta ON Sta.IdStatus = Tar.IdStatus",
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
  db.query("SELECT "+
    "Tar.IdTarea,"+
    "Tar.Titulo,"+
    "Tar.Descripcion,"+
    "Tar.FechaInicio,"+
    "Tar.FechaFin,"+
    "Tar.IdResponsable,"+
    "Tar.IdColaborador,"+
    "Tar.IdStatus "+
    "FROM tarea Tar WHERE Tar.IdTarea="+ id,
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
    "INSERT INTO TAREA " +
      "(Titulo, Descripcion,FechaFin, idResponsable, idColaborador, idStatus) " +
      "VALUES(?,?,?,?,?,?)",
    [
      body.titulo,
      body.descripcion,
      body.fechaFin,
      body.responsable,
      body.colaborador,
      body.status
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
    "Update TAREA SET " +
      "Titulo = ?," +
      "Descripcion = ?," +
      "FechaFin = ?," +
      "idResponsable = ?," +
      "idColaborador = ?," +
      "idStatus = ? " +
      "WHERE idTarea ="+ body.id,
    [
      body.titulo,
      body.descripcion,
      body.fechaInicio,
      body.fechaFin,
      body.responsable,
      body.colaborador,
      body.status
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
  db.query("UPDATE TAREA SET IDSTATUS= 6 where idTarea = " + id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Tarea;

// SELECT
//     Tar.IdTarea,
//     Tar.Titulo,
//     Tar.Descripcion,
//     Tar.FechaInicio,
//     Tar.FechaFin,
//     Tar.IdResponsable,
//     Tar.IdColaborador,
//     Tar.IdStatus
// FROM tarea Tar
// INNER JOIN colaborador Col1 ON Col1.IdColaborador = Tar.IdColaborador
// INNER JOIN colaborador Col2 ON Col2.IdColaborador = Tar.IdResponsable
// INNER JOIN STATUS Sta ON Sta.IdStatus = Tar.IdStatus