import express from "express";
import { recordController } from "../controllers/record.controller";

const recordRouter = express.Router();

recordRouter
  .route("/getAllRecords")
  .get((req, res) => new recordController().getAllRecords(req, res));

export default recordRouter;
