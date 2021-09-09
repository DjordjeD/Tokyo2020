import express from "express";
import { competitorController } from "../controllers/competitor.controller";

const competitorRouter = express.Router();

competitorRouter
  .route('/getAllCompetitors')
  .get((req, res) => new competitorController().getAllCompetitors(req, res));

competitorRouter
  .route('/searchCompetitors')
  .post((req, res) => new competitorController().searchCompetitors(req, res));

export default competitorRouter;
