import { bd } from "../infra/ControlDatabase.js";

const getAllPlans = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM PLANS", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const createPlans = (model) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO PLANS (TIPO_PLANO, DESCRICAO, VALOR, DURACAO_PLANO)
          VALUES (?,?,?,?)`,
      [model.TIPO_PLANO, model.DESCRICAO, model.VALOR, model.DURACAO_PLANO],
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

const getPlansByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM PLANS WHERE ID = ?`, id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const updatePlansByID = (model) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE PLANS
        SET TIPO_PLANO = ?, DESCRICAO = ?, VALOR = ?, DURACAO_PLANO = ?  
              WHERE ID = ?`,
      [model.TIPO_PLANO, model.DESCRICAO, model.VALOR, model.DURACAO_PLANO],
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

const deletePlansByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM PLANS WHERE ID = ?`, id, (erro) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve("Plano deletado com sucesso");
      }
    });
  });
};

export {
  getAllPlans,
  createPlans,
  getPlansByID,
  updatePlansByID,
  deletePlansByID,
};
