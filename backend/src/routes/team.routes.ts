import express from "express";
import { teamController } from "../controllers/team.controller";

const teamRouter = express.Router();

teamRouter
  .route("/getAllTeams")
  .post((req, res) => new teamController().getAllTeams(req, res));

export default teamRouter;
