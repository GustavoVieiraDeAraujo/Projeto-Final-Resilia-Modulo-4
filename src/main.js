// Importando pacotes
import cors from "cors";
import express from "express"

// Importando controllers
import { controllersUsers } from "./controllers/Users.js";
import { controllerTickets } from "./controllers/Tickets.js";
import { controllersMovies } from "./controllers/Movies.js";
import { controllersPlans } from "./controllers/Plans.js";

const app = express()

app.use(express.json())

app.use(cors(
    {
    origin: "*"
    }
))

//inserir codigo a partir daqui
controllersMovies(app);
controllersUsers(app);
controllerTickets(app);
controllersPlans(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("API rodando na porta 3000"))
