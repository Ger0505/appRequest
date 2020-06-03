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

Tarea.listTarea = (id,result) => {
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
    "INNER JOIN STATUS Sta ON Sta.IdStatus = Tar.IdStatus "+
    "WHERE (Col1.IdColaborador= ? OR Col2.IdColaborador= ?) AND Tar.IdStatus != 6",
    [id,id],
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
  "Tar.TItulo,"+
  "Tar.Descripcion,"+
  "DATE_FORMAT(Tar.FechaInicio,'%Y-%m-%d') AS FechaInicio,"+
  "DATE_FORMAT(Tar.FechaFin,'%Y-%m-%d') AS FechaFin,"+
  "Tar.IdColaborador,"+
  "CONCAT(Col1.Nombre,' ',Col1.Apellido1,' ',Col1.Apellido2) AS Colaborador,"+
  "Tar.IdResponsable,"+
  "CONCAT(Col2.Nombre,' ',Col2.Apellido1,' ',Col2.Apellido2) AS Colaborador,"+
  "Tar.IdStatus,"+
  "Sta.Nombre AS Status "+
"FROM tarea Tar "+
"INNER JOIN colaborador Col1 ON Col1.IdColaborador = Tar.IdColaborador "+
"INNER JOIN colaborador Col2 ON Col2.IdColaborador = Tar.IdResponsable "+
"INNER JOIN status Sta ON Sta.IdStatus = Tar.IdStatus "+
"WHERE IdTarea ="+id,
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

Tarea.updateStatus = (body, result) => {
  db.query(
    "Update TAREA SET " +
      "idStatus = ? " +
      "WHERE idTarea ="+ body.id,
    [
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

Tarea.listFile = (id,result) => {
  db.query("SELECT "+
    "IdArchivo,"+
    "Ruta,"+
    "IdTarea "+
    "FROM archivo "+
    "WHERE STATUS = 1 AND IdTarea ="+id,
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

Tarea.insertFile = (body, result) => {
  db.query(
    "INSERT INTO ARCHIVO " +
      "(Ruta,IdTarea) " +
      "VALUES(?,?)",
    [
      body.ruta,
      body.idTarea
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

Tarea.deleteFile = (body, result) => {
  db.query("UPDATE ARCHIVO SET STATUS= 0 where RUTA = '"+[body.name]+"'", function (err, res) {
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