import express from "express";
import Teams from "../models/team";

export class teamController {
  getAllTeams = (req: express.Request, res: express.Response) => {
    Teams.find({}, (err, team) => {
      if (err) console.log(err);
      else res.json(team);
    });
  };
}
