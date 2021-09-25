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
    let newTournament = new Tournaments(req.body);

    Tournaments.findOne(
      {
        sportName: req.body.sportName,
        disciplineName: req.body.disciplineName
      },
      (err, tournament) => {
        if (err) console.log(err);
        else if (tournament) {
          res.json({ msg: "greska" });
        } else {
          newTournament
            .save()
            .then(() => {
              res.status(200).json({ msg: "dodat" });
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({ message: err });
            });
        }
      }
    );
  };


  updateTournament = (req: express.Request, res: express.Response) => {
    //console.log(req.body);
    //"projection":{ "_id": 0},
    var tournament = req.body
    delete tournament._id;
    //console.log(tournament);
    let options= {"projection":{ "_id": 0}, "upsert":true, returnOriginal: false}
    Tournaments.collection.findOneAndReplace({ sportName: req.body.sportName,
      disciplineName: req.body.disciplineName},tournament,options, (err,data) => {
        if(err) console.log(err + "ERROR");
        else res.json({msg:"dodat"})
        //console.log(data)
      })
    }


 

  
}