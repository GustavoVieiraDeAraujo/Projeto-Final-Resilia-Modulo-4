
import express from "express"
import cors from "cors";
import { controllersMovies } from "./controllers/Movies.js";

const app = express()

app.use(express.json())


app.use(cors(
    {
    origin: "*"
    }
))

controllersMovies(app)

app.listen(3000, () => console.log("API rodando na porta 3000"))