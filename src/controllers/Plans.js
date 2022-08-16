// Parte Diego

import {
  deletePlansID,
  getPlansByID,
  getAllPlans,
  createPlans,
  updatePlansByID,
} from "../dao/Plans";

export const controllerPlans = (app) => {
  app.get("/plans/all", async (req, res) => {
    const allPlans = await getAllPlans();
    try {
      allPlans
        ? res.status(200).json(allPlans)
        : () => {
            throw new Error("❓❓Plans not found❓❓");
          };
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.get("/plans/one/:id", async (req, res) => {
    const Plans = await getPlansByID(req.params.id);
    try {
      Plans
        ? res.status(200).json(Ticket)
        : () => {
            throw new Error("❓❓Plans not found❓❓");
          };
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.post("/plans", async (req, res) => {
    const { type, price, description, score } = req.body;
    const responseDAO = await createPlans([
      tipo_plano,
      descricao,
      valor,
      duracao_plano,
    ]);
    try {
      responseDAO == "Plan created"
        ? res.status(200).send(responseDAO)
        : () => {
            throw new Error("😭😭Failed to create entry😭😭");
          };
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.put("/plans/:id", async (req, res) => {
    const { tipo_plano, descricao, valor, duracao_plano } = req.body;
    const responseDAO = await updatePlansByID([
      tipo_plano,
      descricao,
      valor,
      duracao_plano,
      req.params.id,
    ]);
    try {
      responseDAO == "Plan updated"
        ? res.status(200).send(responseDAO)
        : () => {
            throw new Error("😭😭Failed to update entry😭😭");
          };
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.delete("/plans/:id", async (req, res) => {
    const responseDAO = await deletePlansID(req.params.id);
    try {
      responseDAO == "Plan deleted"
        ? res.status(200).send(responseDAO)
        : () => {
            throw new Error("😭😭Failed to delete entry😭😭");
          };
    } catch (erro) {
      res.status(400).send(e.message);
    }
  });
};
