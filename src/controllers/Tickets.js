import {
  deleteTicketByID,
  getTicketByID,
  getAllTickets,
  createTicket,
  updateTicketsByID,
} from "../dao/Tickets.js";

export const controllerTickets = (app) => {

  app.get("/tickets/all", async (req, res) => {
    const allTickets = await getAllTickets()
    try {
      (allTickets) ? res.status(200).json(allTickets) : () => {throw new Error("❓❓Tickets not found❓❓")}
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.get("/tickets/one/:id", async (req, res) => {
    const Ticket = await getTicketByID(req.params.id)
    try {
      (Ticket) ? res.status(200).json(Ticket) : () => {throw new Error("❓❓Ticket not found❓❓")}
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.post("/tickets", async (req, res) => {
    const { type, price, description, score } = req.body;
    const responseDAO = await createTicket([type,price,description,score]);
    try {
      (responseDAO == "Ticket created") ? res.status(200).send(responseDAO) : () => {throw new Error("😭😭Failed to create entry😭😭")};
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.put("/tickets/:id", async (req, res) => {
    const { type, price, description, score } = req.body;
    const responseDAO = await updateTicketsByID([type, price, description, score, req.params.id]);
    try {
      (responseDAO == "Ticket updated") ? res.status(200).send(responseDAO) : () => {throw new Error("😭😭Failed to update entry😭😭")};
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.delete("/tickets/:id", async (req, res) => {
    const responseDAO =await deleteTicketByID(req.params.id);
    try {
      (responseDAO == "Ticket deleted") ? res.status(200).send(responseDAO) : () => {throw new Error("😭😭Failed to delete entry😭😭")};
    } catch (erro) {
      res.status(400).send(e.message);
    }
  });
};