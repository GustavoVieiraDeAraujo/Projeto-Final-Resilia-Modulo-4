// !!!!! TOMAR CUIDADO AQUI !!!!!

// Importando express
import express from "express"
import cors from "cors";
import { controllersUsers } from "./controllers/Users.js";


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

controllersUsers (app)

// Porta que API vai rodar
app.listen(3000, () => console.log("API rodando na porta 3000"))