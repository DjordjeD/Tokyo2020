import express from "express";
import { sportController } from "../controllers/sport.controller";

const sportRouter = express.Router();

sportRouter
  .route("/getAllSports")
  .get((req, res) => new sportController().getAllSports(req, res));

export default sportRouter;
