import express from "express";
import Sports from "../models/sport";

export class sportController {
  getAllSports = (req: express.Request, res: express.Response) => {
    Sports.find({}, (err, sport) => {
      if (err) console.log(err);
      else res.json(sport);
    });
  };
  bool: boolean;
  addDiscipline = (req: express.Request, res: express.Response) => {
    //todos
    console.log("addDiscipline");
    let disciplineType1 = {
      discipline: {
        disciplineName: req.body.disciplineName,
        sportName: req.body.sportName,
        individual: req.body.type,
        min: req.body.min,
        max: req.body.max,
      },
    };
    this.bool = true;
    let sportName = req.body.sportName;

    Sports.findOne(
      { "disciplines.disciplineName": req.body.disciplineName },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log("disciplina vec postoji");
          res.json(result);
        } else {
          Sports.collection.updateOne(
            { sportName: sportName },
            { $push: { disciplines: disciplineType1 } },
            (err, result) => {
              if (err) console.log(err);
              else res.json(result);
            }
          );
        }
      }
    );
    // console.log("addDiscipline");
  };

  addSport = (req: express.Request, res: express.Response) => {
    //todos
    let smthn = {
      sportName: req.body.sportName,
    };
    // console.log(req.body.sportName);
    Sports.findOne({ sportName: req.body.sportName }, (err, result) => {
      if (err) console.log(err);
      if (result) {
        res.json(result);
      } else {
        let newSport = new Sports(smthn);

        newSport.save().then(() => {
          res.json(newSport);
        });
      }
    });
  };


  addMedal = (req: express.Request, res: express.Response) => {
    //todos
    let sport= req.body
    delete sport._id
    console.log(req.body)

    Sports.collection.findOneAndReplace({sportName: req.body.sportName},sport,(err, data)=>{
      if (err) console.log(err)
      else res.json({msg: "dodata Medalja"})
    })
  };
}
