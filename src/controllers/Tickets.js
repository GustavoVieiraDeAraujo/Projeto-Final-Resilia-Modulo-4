import {Ticket} from "../models/Tickets.js"

import {
  deleteTicketByID,
  getTicketByID,
  getAllTickets,
  createTicket,
  updateTicketsByID,
} from "../dao/Tickets.js";

export const controllerTickets = (app) => {

  app.get("/tickets/all", async (req, res) => {
    try {
      const allTickets = await getAllTickets()
      res.status(200).json(allTickets)
    } catch (e) {
      res.status(400).send(e);
    }
  });

  app.get("/tickets/one/:id", async (req, res) => {
    try {
      const Ticket = await getTicketByID(req.params.id)
      res.status(200).json(Ticket)
    } catch (e) {
      res.status(400).send(e);
    }
  });

  app.post("/tickets", async (req, res) => {
    try {
      if (Object.keys(req.body).length === 4){
        const {type, price, description, score} = req.body
        const responseDAO = await createTicket(new Ticket(type, price, description, score))
        res.status(200).send(responseDAO)
      } else {
        throw new Error("❌❌ Missing attributes or too many attributes ❌❌")
      }
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.put("/tickets/:id", async (req, res) => {
    try {
      const oldTicket = await getTicketByID(req.params.id)
      const { type, price, description, score } = req.body;
      const newTicket = new Ticket(type, price, description, score)
      newTicket.id = oldTicket.id
      newTicket.symbol = oldTicket.symbol
      newTicket.creation_date = oldTicket.creation_date
      const responseDAO = await updateTicketsByID(newTicket);
      res.status(200).send(responseDAO);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  app.delete("/tickets/:id", async (req, res) => {
    try {
      await getTicketByID(req.params.id)
      const responseDAO = await deleteTicketByID(req.params.id)
      res.status(200).send(responseDAO)
    } catch (e) {
      res.status(400).send(e);
    }
  });
};