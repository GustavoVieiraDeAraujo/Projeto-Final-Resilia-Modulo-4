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
      `INSERT INTO PLANS (TIPO_PLANO, DESCRICAO, VALOR, DURACAO_PLANOS)
          VALUES (?,?,?,?)`,
      [model.tipo_plano, model.descricao, model.valor, model.duracao_plano],
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
        SET TIPO_PLANOS = ?, DESCRICAO = ?, VALOR = ?, DURACAO_PLANOS = ?  
              WHERE ID = ?`,
      [model.tipo_plano, model.descricao, model.valor, model.duracao_plano],
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
