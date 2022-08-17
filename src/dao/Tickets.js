import CryptoJS  from "crypto-js";
import {bd} from "../infra/ControlDatabase.js";

const getAllTickets = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM TICKETS", (erro, rows) => {
      if (erro ) reject(erro);
      // Se o banco de dados não tiver nenhum ingresso manda o erro especificado
      else if ( rows.length === 0 ) reject("❌❌ No tickets in the database ❌❌");  
      else {
        // Passa por cada linha da tabela e discriptografa os dados dela
        // Como estou criando um JSON novo, posso filtrar ele antes de enviar, como por exemplo emitir um campo sensivel
        rows.forEach((elemento,index)=>{
          const {ID, SYMBOL, TYPE, PRICE, DESCRIPTION, SCORE, CREATION_DATE, LAST_UPDATE} = elemento
          rows[index] = {
            symbol: SYMBOL,
            id: ID,
            type:  CryptoJS.Rabbit.decrypt(TYPE, '123456789').toString(CryptoJS.enc.Utf8),
            price: parseInt(CryptoJS.Rabbit.decrypt(PRICE, '123456789').toString(CryptoJS.enc.Utf8)),
            description: CryptoJS.Rabbit.decrypt(DESCRIPTION, '123456789').toString(CryptoJS.enc.Utf8),
            score: parseInt(CryptoJS.Rabbit.decrypt(SCORE, '123456789').toString(CryptoJS.enc.Utf8)),
            creation_date: CREATION_DATE ,
            last_update: LAST_UPDATE,
          }
        })
        resolve(rows)
    }})
  })
}

const getTicketByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM TICKETS WHERE ID = ?`, id, (erro, rows) => {
      if ( erro ) reject(erro);
      // Se o ID não existir ele retorna nenhuma coluna, logo tem que mandar o erro especificado
      else if ( rows.length === 0 ) reject("❌❌ The id doesn't exist ❌❌");  
      else {
        // Discriptografando os dados
        // Como estou criando um JSON novo, posso filtrar ele antes de enviar, como por exemplo emitir um campo sensivel
        const {ID, SYMBOL, TYPE, PRICE, DESCRIPTION, SCORE, CREATION_DATE, LAST_UPDATE} = rows[0]
        const jsonDescrip = {
          symbol: SYMBOL,
          id: ID,
          type:  CryptoJS.Rabbit.decrypt(TYPE, '123456789').toString(CryptoJS.enc.Utf8),
          price: parseInt(CryptoJS.Rabbit.decrypt(PRICE, '123456789').toString(CryptoJS.enc.Utf8)),
          description: CryptoJS.Rabbit.decrypt(DESCRIPTION, '123456789').toString(CryptoJS.enc.Utf8),
          score: parseInt(CryptoJS.Rabbit.decrypt(SCORE, '123456789').toString(CryptoJS.enc.Utf8)),
          creation_date: CREATION_DATE ,
          last_update: LAST_UPDATE,
        }
        resolve(jsonDescrip)
    }})
  });
};

const createTicket = (Ticket) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO TICKETS (ID, SYMBOL, TYPE, PRICE, DESCRIPTION, SCORE, CREATION_DATE, LAST_UPDATE) VALUES (?,?,?,?,?,?,?,?)`, 
      [Ticket.id, Ticket.symbol, Ticket.type, Ticket.price, Ticket.description, Ticket.score, Ticket.creation_date, Ticket.last_update], 
      (erro) => erro ? reject(erro.message) : resolve("🎉🎉 Ticket created successfully 🎉🎉"));
  })
};

const updateTicketsByID = (Ticket) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE TICKETS SET SYMBOL = ?, TYPE = ?, PRICE = ?, DESCRIPTION = ?, SCORE = ?, CREATION_DATE = ?, LAST_UPDATE =?  WHERE ID = ?`, 
      [Ticket.symbol, Ticket.type, Ticket.price, Ticket.description, Ticket.score, Ticket.creation_date, Ticket.last_update, Ticket.id], 
      (erro) => erro ? reject(erro.message) : resolve("🎉🎉 Ticket updated successfully 🎉🎉"))
  });
};

const deleteTicketByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM TICKETS WHERE ID = ?`, id, (erro) => erro ? reject(erro.message) : resolve("🎉🎉 Ticket deleted successfully 🎉🎉"))
  });
};

export { getAllTickets, getTicketByID, createTicket, updateTicketsByID, deleteTicketByID };