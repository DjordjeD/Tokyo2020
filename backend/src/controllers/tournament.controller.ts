import express from "express";
import Tournaments from "../models/tournament";

export class tournamentController {
  getAllTournaments = (req: express.Request, res: express.Response) => {
    Tournaments.find({}, (err, tournament) => {
      if (err) console.log(err);
      else res.json(tournament);
    });
  };

  saveTournament = (req: express.Request, res: express.Response) => {
    let newTournament=  new Tournaments(req.body)

    Tournaments.findOneAndUpdate()
    {}
  };
}
