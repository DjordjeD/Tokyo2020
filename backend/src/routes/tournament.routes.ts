import express from "express";
import { tournamentController } from "../controllers/tournament.controller";

const tournamentRouter = express.Router();

tournamentRouter
  .route("/getAllTournaments")
  .post((req, res) => new tournamentController().getAllTournaments(req, res));


  tournamentRouter
  .route("/saveTournament")
  .post((req, res) => new tournamentController().saveTournament(req, res));

export default tournamentRouter;
