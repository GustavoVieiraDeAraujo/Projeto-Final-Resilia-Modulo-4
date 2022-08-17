import plansModel from "../models/Plans.js";

import {
  getAllPlans,
  createPlans,
  getPlansByID,
  updatePlansByID,
  deletePlansByID,
} from "../dao/Plans.js";

export const controllersPlans = (app) => {
  app.get("/plans/all", async (req, res) => {
    const allPlans = await getAllPlans();
    try {
      allPlans
        ? res.status(200).json(allPlans)
        : () => {
            throw new Error("Plans not found");
          };
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.post("/plans", async (req, res) => {
    const { tipo_plano, descricao, valor, duracao_plano } = req.body;

    const dataPost = new plansModel(
      tipo_plano,
      descricao,
      valor,
      duracao_plano
    );
    try {
      const data = await createPlans(dataPost);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.get("/plans/one/:id", async (req, res) => {
    try {
      const data = await getPlansByID(req.params.id);
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.put("/plans/:id", async (req, res) => {
    const { tipo_plano, descricao, valor, duracao_plano } = req.body;
    const { id } = req.params;

    const oldPlans = await getAllPlans(id);
    const dataPut = new plansModel(
      tipo_plano || oldPlans[0].tipo_plano,
      descricao || oldPlans[0].descricao,
      valor || oldPlans[0].valor,
      duracao_plano || oldPlans[0].duracao_plano,
      id
    );

    try {
      const data = await updatePlansByID(dataPut);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.delete("/plans/:id", async (req, res) => {
    try {
      const data = await deletePlansByID(req.params.id);
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });
};
