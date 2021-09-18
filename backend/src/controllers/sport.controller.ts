import express from "express";
import Sports from "../models/sport";

export class sportController {
  getAllSports = (req: express.Request, res: express.Response) => {
    Sports.find({}, (err, sport) => {
      if (err) console.log(err);
      else res.json(sport);
    });
  };

  addDiscipline = (req: express.Request, res: express.Response) => {
    //todos
    
  };

  addSport = (req: express.Request, res: express.Response) => {
    //todos

  };

}
