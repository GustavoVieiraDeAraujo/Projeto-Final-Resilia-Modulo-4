import {bd} from "../infra/ControlDatabase.js";

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      bd.all("SELECT * FROM USUARIOS", (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };
  
  const createUsers = (model) => {
    return new Promise((resolve, reject) => {
      bd.run(
        `INSERT INTO USUARIOS(NOME, CPF, EMAIL, DATA_DE_NASCIMENTO, TELEFONE, QUANTIDADE_PONTOS, SENHA)
            VALUES (?,?,?,?,?,?,?)`,
         [model.name, model.cpf, model.email, model.dataNascimento, model.telefone, model.quantidadePontos, model.password],  
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
  
  const getUsersByID = (id) => {
    return new Promise((resolve, reject) => {
      bd.all(`SELECT * FROM USUARIOS WHERE ID = ?`, id, (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };
  
  const updateUsersByID = (model) => {
    return new Promise((resolve, reject) => {
      bd.run(
        `UPDATE USUARIOS 
              SET NOME = ?, CPF = ?, EMAIL = ?, DATA_DE_NASCIMENTO = ?, TELEFONE = ?, QUANTIDADE_PONTOS = ?, SENHA = ?
                WHERE ID = ?`,
              [model.name, model.cpf, model.email, model.dataNascimento, model.telefone, model.quantidadePontos, model.password],  
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
  
  const deleteUsersByID = (id) => {
    return new Promise((resolve, reject) => {
      bd.run(`DELETE FROM USUARIOS WHERE ID = ?`, id, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Usuario deletado com sucesso");
        }
      });
    });
  };
  
  export { getAllUsers, createUsers, getUsersByID, updateUsersByID, deleteUsersByID };