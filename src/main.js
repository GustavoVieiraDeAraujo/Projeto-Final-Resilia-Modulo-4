// Importando express
import cors from "cors";
import express from "express"
import {controllerTickets} from "./controllers/Tickets.js"

// Instanciando express
const app = express()

// Middleware
app.use(express.json())

// Limitando usuarios da API
app.use(cors(
    {
    origin: "*"
    }
))

//inserir codigo a partir daqui
controllerTickets(app)

// Porta que API vai rodar
app.listen(3000, () => console.log("API rodando na porta 3000"))