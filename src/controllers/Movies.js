import moviesModel from "../models/Movies.js";

import {
  getAllMovies,
  createMovie, 
  getMovieByID, 
  updateMoviesByID, 
  deleteMovieByID
} from "../dao/Movies.js";

export const controllersMovies = (app) => {

        app.get("/movies/all", async (req, res) => {
          const allMovies = await getAllMovies()
          try {
            (allMovies) ? res.status(200).json(allMovies) : () => {throw new Error("Movie not found")}
          } catch (e) {
            res.status(400).send(e.message);
          }
        });

        app.post("/movies", async (req, res) => {
          const { NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS} = req.body;

           const dataPost= new moviesModel(NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS);
           try {
           const data = await createMovie(dataPost);
             res.status(201).json({ results: data, error: false });
          } catch (erro) {
             res.status(400).json({ message: erro.message, error: true });
          }
        });

        app.get("/movies/one/:id", async (req, res) => {
          try {
            const data = await getMovieByID(req.params.id)
            res.status(200).json({ results: data, error: false });
          } catch (erro) {
            res.status(400).json({ message: erro.message, error: true });
          }
        });


          app.put("/movies/:id", async (req, res) => {
            const { NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS } = req.body;
            const { id } = req.params;

            const oldMovie = await getAllMovies(id);
            const dataPut = new moviesModel(
              NOME || oldMovie[0].nome,
              DATA_DE_CRIACAO || oldMovie[0].data_de_criacao,
              SINOPSE || oldMovie[0].sinopse,
              CLASSIFICACAO || oldMovie[0].classificacao,
              DURACAO || oldMovie[0].duracao,
              HORARIOS || oldMovie[0].horarios,
            id
            );

            try {
              const data = await updateMoviesByID (dataPut);
              res.status(201).json({ results: data, error: false });
            } catch (erro) {
              res.status(400).json({ message: erro.message, error: true });
            }
          });
        


          app.delete("/movies/:id", async (req, res) => {
            try {
              const data = await deleteMovieByID(req.params.id);
              res.status(200).json({ results: data, error: false });
            } catch (erro) {
              res.status(400).json({ message: erro.message, error: true });
            }
          });
       

};