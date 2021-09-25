import express from "express";
import { sportController } from "../controllers/sport.controller";

const sportRouter = express.Router();


sportRouter
  .route("/addSport")
  .post((req, res) => new sportController().addSport(req, res));


sportRouter
  .route("/addDiscipline")
  .post((req, res) => new sportController().addDiscipline(req, res));


sportRouter
  .route("/getAllSports")
  .get((req, res) => new sportController().getAllSports(req, res));

sportRouter
  .route("/addMedal")
  .post((req, res) => new sportController().addMedal(req, res));





export default sportRouter;
