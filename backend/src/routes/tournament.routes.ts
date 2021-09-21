import express from "express";
import { tournamentController } from "../controllers/tournament.controller";

const tournamentRouter = express.Router();

tournamentRouter
  .route("/getAllTournaments")
  .get((req, res) => new tournamentController().getAllTournaments(req, res));


  tournamentRouter
  .route("/saveTournament")
  .post((req, res) => new tournamentController().saveTournament(req, res));

  tournamentRouter
  .route("/updateTournament")
  .post((req, res) => new tournamentController().updateTournament(req, res));


export default tournamentRouter;
