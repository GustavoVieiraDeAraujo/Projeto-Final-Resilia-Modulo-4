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
        `INSERT INTO USUARIOS(NOME, CPF, EMAIL, DATA DE NASCIMENTO, TELEFONE, QUANTIDADE DE PONTOS, SENHA)
            VALUES (?,?,?,?,?,?,?)`,
         [model.name, model.email, model.password],  
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
              SET NOME = ?, EMAIL = ?, SENHA = ? 
                WHERE ID = ?`,
        [model.name, model.email, model.password, model.id],
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
          resolve("Usuario Deletada(o,e) com sucesso");
        }
      });
    });
  };
  
  export { getAllUsers, createUsers, getUsersByID, updateUsersByID, deleteUsersByID };