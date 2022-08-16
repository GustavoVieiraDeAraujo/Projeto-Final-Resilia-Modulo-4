import {bd} from "../infra/ControlDatabase.js";

const getAllTickets = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM TICKETS", (erro, rows) => {
      erro ? reject(erro.message) : resolve(rows);
    });
  });
};

const getTicketByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM TICKETS WHERE ID = ?`, id, (erro, rows) => {
        erro ? reject(erro.message) : resolve(rows);
    });
  });
};

const createTicket = (listaAtributos) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO TICKETS(TYPE, PRICE, DESCRIPTION, SCORE)
          VALUES (?,?,?,?)`, [...listaAtributos], (erro) => erro ? reject(erro.message) : resolve("🎉🎉Ticket created successfully🎉🎉"));
  });
};

const updateTicketsByID = (listaAtributosComId) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE TICKETS
            SET TYPE = ?, PRICE = ?, DESCRIPTION = ?, SCORE = ?  
              WHERE ID = ?`, [...listaAtributosComId], (erro) => erro ? reject(erro.message) : resolve("🎉🎉Ticket updated successfully🎉🎉"))
  });
};

const deleteTicketByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM TICKETS WHERE ID = ?`, id, (erro) => erro ? reject(erro.message) : resolve("🎉🎉Ticket deleted successfully🎉🎉"))
  });
};

export { getAllTickets, getTicketByID, createTicket, updateTicketsByID, deleteTicketByID };