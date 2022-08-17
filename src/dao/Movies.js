import {bd} from "../infra/ControlDatabase.js";

const getAllMovies = () => {
    return new Promise((resolve, reject) => {
      bd.all("SELECT * FROM movies", (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };
  
  const createMovie = (model) => {
    return new Promise((resolve, reject) => {
      bd.run(
        `INSERT INTO movies(NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS)
            VALUES (?,?,?,?,?,?)`,
         [model.NOME, model.DATA_DE_CRIACAO, model.SINOPSE, model.CLASSIFICACAO, model.DURACAO, model.HORARIOS],  
        (erro) => {
          if (erro) {
            reject(erro.message);
          } else {
            resolve(model);
          }
        }
      );
    });
  };
  
  const getMovieByID = (id) => {
    return new Promise((resolve, reject) => {
      bd.all(`SELECT * FROM movies WHERE ID = ?`, id, (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };
  
  const updateMoviesByID = (model) => {
    return new Promise((resolve, reject) => {
      bd.run(
        `UPDATE movies 
          SET NOME = ?, DATA_DE_CRIACAO = ?, SINOPSE = ?, CLASSIFICACAO = ?, DURACAO = ?, HORARIOS = ?
                WHERE ID = ?`,
              [model.NOME, model.DATA_DE_CRIACAO, model.SINOPSE, model.CLASSIFICACAO, model.DURACAO, model.HORARIOS],  
                (erro, rows) => {
          if (erro) {
            reject(erro.message);
          } else {
            resolve(model);
          }
        }
      );
    });
  };
  
  const deleteMovieByID = (id) => {
    return new Promise((resolve, reject) => {
      bd.run(`DELETE FROM movies WHERE ID = ?`, id, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Movie deletado com sucesso");
        }
      });
    });
  };
  
  export { getAllMovies, createMovie, getMovieByID, updateMoviesByID, deleteMovieByID };