import express from "express";
import { sportController } from "../controllers/sport.controller";

const sportRouter = express.Router();

sportRouter
  .route("/getAllSports")
  .post((req, res) => new sportController().getAllSports(req, res));

export default sportRouter;
