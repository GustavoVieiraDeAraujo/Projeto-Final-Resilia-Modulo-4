import usersModel from "../models/Users.js";

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

        app.post("/users", async (req, res) => {
          const { nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha} = req.body;

           const dataPost= new usersModel(nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha);
           try {
           const data = await createUsers(dataPost);
             res.status(201).json({ results: data, error: false });
          } catch (erro) {
             res.status(400).json({ message: erro.message, error: true });
          }
        });

        app.get("/users/one/:id", async (req, res) => {
          try {
            const data = await getUsersByID(req.params.id)
            res.status(200).json({ results: data, error: false });
          } catch (erro) {
            res.status(400).json({ message: erro.message, error: true });
          }
        });


          app.put("/users/:id", async (req, res) => {
            const { nome, cpf, email, dataNascimento, telefone, quantidadePontos, senha } = req.body;
            const { id } = req.params;

            const oldUser = await getAllUsers(id);
            const dataPut = new usersModel(
              nome || oldUser[0].NOME,
              cpf || oldUser[0].CPF,
              email || oldUser[0].EMAIL,
              dataNascimento || oldUser[0].DATA_DE_NASCIMENTO,
              telefone || oldUser[0].TELEFONE,
              quantidadePontos || oldUser[0].QUANTIDADE_PONTOS,
              senha || oldUser[0].SENHA,
            id
            );

            try {
              const data = await updateUsersByID (dataPut);
              res.status(201).json({ results: data, error: false });
            } catch (erro) {
              res.status(400).json({ message: erro.message, error: true });
            }
          });
        


          app.delete("/users/:id", async (req, res) => {
            try {
              const data = await deleteUsersByID(req.params.id);
              res.status(200).json({ results: data, error: false });
            } catch (erro) {
              res.status(400).json({ message: erro.message, error: true });
            }
          });
       

};