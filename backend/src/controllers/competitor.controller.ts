import express from "express";
import Competitors from "../models/competitor";

export class competitorController {
  getAllCompetitors = (req: express.Request, res: express.Response) => {
    Competitors.find({}, (err, competitor) => {
      if (err) console.log(err);
      else res.json(competitor);
    });
  };

  searchCompetitors = (req: express.Request, res: express.Response) => {
    let name = req.body.name;
    let surname= req.body.surname;
    let countryName = req.body.countryName;
    let sportName = req.body.sportName;
    let disciplineName = req.body.disciplineName;
    let sex = req.body.sex;
    let medalWinner = req.body.medalWinner;

    if(name == null) name="";

    if(surname==null) surname ="";
    // if(sportName==undefined) sportName ="";
     if(sex=='') sex ="";
    // if(disciplineName==undefined) disciplineName ="";
     if(countryName==null) countryName ="";

     //if(medalWinner == null) 

    console.log("search_competitors");
    console.log(req.body);


    Competitors.find(
      {
         name: { $regex: name.toString() },
         surname: { $regex: surname.toString() },
        'country.countryName':{$regex: countryName.toString()},
         sex :{ $regex: sex.toString()}
         //medalWinner :{ $regex: medalWinner.toString()}

      },
      (err, competitor) => {
        if (err) console.log(err);
        else 
        {
           res.json(competitor);
        }
      }
    );
  };
}
