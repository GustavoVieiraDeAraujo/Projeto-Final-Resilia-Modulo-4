import {bd} from "../infra/ControlDatabase.js";

const getAllMovies = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM movies", (erro, rows) => {
      erro ? reject(erro.message) : resolve(rows);
    });
  });
};

const getMovieByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM movies WHERE ID = ?`, id, (erro, rows) => {
        erro ? reject(erro.message) : resolve(rows);
    });
  });
};

const createMovie = (listaAtributos) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO movies(NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS)
          VALUES (?,?,?,?,?,?)`, [...listaAtributos], (erro) => erro ? reject(erro.message) : resolve("🎉🎉Movie created successfully🎉🎉"));
  });
};

const updateMovieByID = (listaAtributosComId) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE movies
            SET NOME = ?, DATA_DE_CRIACAO = ?, SINOPSE = ?, CLASSIFICACAO = ?, DURACAO = ?, HORARIOS = ?  
              WHERE ID = ?`, [...listaAtributosComId], (erro) => erro ? reject(erro.message) : resolve("🎉🎉Movie updated successfully🎉🎉"))
  });
};

const deleteMovieByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM movies WHERE ID = ?`, id, (erro) => erro ? reject(erro.message) : resolve("🎉🎉Movie deleted successfully🎉🎉"))
  });
};

export { getAllMovies, getMovieByID, createMovie, updateMovieByID, deleteMovieByID };