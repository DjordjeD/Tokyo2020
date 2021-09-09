import express from "express";
import { countryController } from "../controllers/country.controller";

const countryRouter = express.Router();

countryRouter
  .route('/getAllCountries')
  .get((req, res) => new countryController().getAllCountries(req, res));

export default countryRouter;
