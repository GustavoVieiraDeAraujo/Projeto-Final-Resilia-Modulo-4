import nodemon from "nodemon";
import {
    deleteMovieByID,
    getMovieByID,
    getAllMovies,
    createMovie,
    updateMovieByID,
  } from "../dao/Movies.js";
  
  export const controllerMovies = (app) => {
  
    app.get("/movies/all", async (req, res) => {
      const allMovies = await getAllMovies()
      try {
        (allMovies) ? res.status(200).json(allMovies) : () => {throw new Error("❓❓Movies not found❓❓")}
      } catch (e) {
        res.status(400).send(e.message);
      }
    });
  
    app.get("/movies/one/:id", async (req, res) => {
      const Movie = await getMovieByID(req.params.id)
      try {
        (Movie) ? res.status(200).json(Movie) : () => {throw new Error("❓❓Movie not found❓❓")}
      } catch (e) {
        res.status(400).send(e.message);
      }
    });
    
    app.post("/movies", async (req, res) => {
      const { NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS } = req.body;
      const responseDAO = await createMovie([NOME,DATA_DE_CRIACAO,SINOPSE,CLASSIFICACAO,DURACAO,HORARIOS]);
      try {
        (responseDAO == "Movie created") ? res.status(200).send(responseDAO) : () => {throw new Error("😭😭Failed to create entry😭😭")};
      } catch (e) {
        res.status(400).send(e.message);
      }
    });
  
    app.put("/movies/:id", async (req, res) => {
      const { NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS } = req.body;
      const responseDAO = await updateMovieByID([NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS, req.params.id]);
      try {
        (responseDAO == "Movie updated") ? res.status(200).send(responseDAO) : () => {throw new Error("😭😭Failed to update entry😭😭")};
      } catch (e) {
        res.status(400).send(e.message);
      }
    });
  
    app.delete("/movies/:id", async (req, res) => {
      const responseDAO =await deleteMovieByID(req.params.id);
      try {
        (responseDAO == "Movie deleted") ? res.status(200).send(responseDAO) : () => {throw new Error("😭😭Failed to delete entry😭😭")};
      } catch (erro) {
        res.status(400).send(e.message);
      }
    });
  };