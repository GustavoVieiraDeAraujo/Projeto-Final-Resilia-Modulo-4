// Parte Diego

import { bd } from "../infra/ControlDatabase.js";

const getAllPlans = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM PLANS", (erro, rows) => {
      erro ? reject(erro.message) : resolve(rows);
    });
  });
};

const getPlansByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM PLANS WHERE ID = ?`, id, (erro, rows) => {
      erro ? reject(erro.message) : resolve(rows);
    });
  });
};

const createPlans = (listaAtributos) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO PLANS (TIPO_PLANO, DESCRICAO, VALOR, DURACAO_PLANOS)
          VALUES (?,?,?,?)`,
      [...listaAtributos],
      (erro) =>
        erro ? reject(erro.message) : resolve("Plans created successfully!")
    );
  });
};

const updatePlansByID = (listaAtributosComId) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE PLANS
            SET TIPO_PLANOS = ?, DESCRICAO = ?, VALOR = ?, DURACAO_PLANOS = ?  
              WHERE ID = ?`,
      [...listaAtributosComId],
      (erro) =>
        erro
          ? reject(erro.message)
          : resolve("🎉🎉Plans updated successfully🎉🎉")
    );
  });
};

const deletePlansByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM PLANS WHERE ID = ?`, id, (erro) =>
      erro
        ? reject(erro.message)
        : resolve("🎉🎉Plans deleted successfully🎉🎉")
    );
  });
};

export {
  getAllPlans,
  getPlansByID,
  createPlans,
  updatePlansByID,
  deletePlansByID,
};
