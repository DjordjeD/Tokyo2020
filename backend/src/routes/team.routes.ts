import express from "express";
import { teamController } from "../controllers/team.controller";

const teamRouter = express.Router();

teamRouter
  .route("/getAllTeams")
  .get((req, res) => new teamController().getAllTeams(req, res));

  teamRouter
  .route("/addTeam")
  .post((req, res) => new teamController().addTeam(req, res));
  
  teamRouter
  .route("/updateTeam")
  .post((req, res) => new teamController().updateTeam(req, res));


export default teamRouter;
