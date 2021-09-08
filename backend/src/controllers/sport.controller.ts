import express from "express";
import sport from "../models/sport";

export class sportController {
  getAllSports = (req: express.Request, res: express.Response) => {
    sport.find({}, (err, sport) => {
      if (err) console.log(err);
      else res.json(sport);
    });
  };
}
