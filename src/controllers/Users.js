
import {
  deleteUsersByID,
  getUsersByID,
  getAllUsers,
  createUsers,
  updateUsersByID,
} from "../dao/Users.js";

export const controllersUsers = (app) => {

        app.get("/users/all", async (req, res) => {
          const allUsers = await getAllUsers()
          try {
            (allUsers) ? res.status(200).json(allUsers) : () => {throw new Error("Users not found")}
          } catch (e) {
            res.status(400).send(e.message);
          }
        });


        app.get("/users/one/:id", async (req, res) => {
            const Users = await getUsersByID(req.params.id)
            try {
              (Users) ? res.status(200).json(Users) : () => {throw new Error("Users not found")}
            } catch (e) {
              res.status(400).send(e.message);
            }
          });

    
  
        app.post("/users", async (req, res) => {
            const { nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha} = req.body;
  
             const dataMolded= new modelUsers(nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha);
             try {
             const data = await createUsers(dataMolded);
               res.status(201).json({ results: data, error: false });
            } catch (erro) {
               res.status(400).json({ message: erro.message, error: true });
            }
          });


          app.put("/users/:id", async (req, res) => {
            const {  nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha } = req.body;
            const responseDAO = await updateUsersByID([ nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha, req.params.id]);
            try {
              (responseDAO == "Ticket updated") ? res.status(200).send(responseDAO) : () => {throw new Error("Failed to update entry")};
            } catch (e) {
              res.status(400).send(e.message);
            }
          });


          
          app.delete("/users/:id", async (req, res) => {
            const responseDAO =await deleteUsersByID(req.params.id);
            try {
              (responseDAO == "Ticket deleted") ? res.status(200).send(responseDAO) : () => {throw new Error("Failed to delete entry")};
            } catch (erro) {
              res.status(400).send(e.message);
            }
          });

};