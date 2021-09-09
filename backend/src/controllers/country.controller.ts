import express from "express";
import Countries from "../models/country";

export class countryController {
  getAllCountries = (req: express.Request, res: express.Response) => {
    Countries.find({}, (err, country) => {
      if (err) console.log(err);
      else res.json(country);
    });
  };
}
