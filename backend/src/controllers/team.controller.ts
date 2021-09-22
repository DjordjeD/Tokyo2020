import express from "express";
import Teams from "../models/team";

export class teamController {
  getAllTeams = (req: express.Request, res: express.Response) => {
    Teams.find({}, (err, team) => {
      if (err) console.log(err);
      else res.json(team);
    });
  };

  addTeam = (req: express.Request, res: express.Response) => {
    let newTeam = new Teams(req.body);
    newTeam.save().then(() => res.json(newTeam));
  };

  updateTeam = (req: express.Request, res: express.Response) => {
    let newTeam = new Teams(req.body);
    let options = {
      projection: { _id: 0 },
      upsert: true,
      returnOriginal: false,
    };

    Teams.collection.findOneAndReplace(
      { teamName: req.body.teamName },
      newTeam,
      options,
      (err, data) => {
        if (err) console.log(err + "ERROR");
        else res.json({ msg: "dodat" });
        console.log(data);
      }
    );
  };
}
