const db = require("./db_conexion.js");
var Comentarios = (Comentario) => {
  this.idComentario = Comentario.idComentario;
  this.comentario = Comentario.comentario;
  this.fecha = Comentario.fecha;
  this.tarea = Comentario.tarea;
  this.colaborador = Comentario.colaborador;
};

Comentarios.listComentarios = (result) => {
  db.query(
    "Select Comentario, Fecha, t.Titulo, c.Colaborador " +
      "from comentarios as co INNER JOIN colaborador as c on co.idColaborador = c.idColaborador " +
      "INNER JOIN tarea as t on co.idTarea = t.idTarea",
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

Comentarios.getComentarios = (id, result) => {
  db.query(
    "Select Comentario, Fecha, t.Titulo, c.Colaborador " +
      "from comentarios as co INNER JOIN colaborador as c on co.idColaborador = c.idColaborador " +
      "INNER JOIN tarea as t on co.idTarea = t.idTarea " +
      "where co.idComentario = " +
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

Comentarios.insertComentarios = (body, result) => {
  db.query(
    "Insert into comentarios " +
      "(Comentario, Fecha, idTarea, idColaborador) " +
      "values (?,?,(SELECT MAX(IDTAREA) FROM TAREA),?)",
    [body.comentario, body.fecha, body.colaborador],
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

Comentarios.updateComentarios = (body, result) => {
  db.query(
    "Update comentarios set " +
      "Comentario = ? " +
      "Fecha = ? " +
      "idTarea = ? " +
      "idColaborador = ? " +
      "where idComentario = ?;",
    [
      body.comentario,
      body.fecha,
      body.tarea,
      body.colaborador,
      body.idComentario,
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

Comentarios.deleteComentarios = (id, result) => {
  db.query("Delete from comentarios" + " where idComentario = " + id, function (
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

module.exports = Comentarios;
