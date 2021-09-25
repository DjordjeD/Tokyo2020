import express from "express";
import Competitors from "../models/competitor";
import Countries from "../models/country";
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
    let sex:string = req.body.sex;
    let medalWinner = req.body.medalWinner;

    if(name == null) name="";

    if(surname==null) surname ="";
    // if(sportName==undefined) sportName ="";
     if(sex.length==0) sex ="";
    // if(disciplineName==undefined) disciplineName ="";
     if(countryName==null) countryName ="";

     //if(medalWinner == null) 

    //console.log("search_competitors");
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


  
  addCompetitor = (req: express.Request, res: express.Response) => {
    
     let newSport= new Competitors(req.body);
    

    newSport.save().then(() => {
      res.json(newSport);
    });
    console.log(req.body.country.countryName)
    Countries.findOneAndUpdate({countryName:req.body.country.countryName},{ $inc:{ numberOfAthletes:1}},(err, data) => {
      if(err) {
        console.log(err)
      }
    }
    )
  }

  medalWinner = (req: express.Request, res: express.Response) => {
    
    //console.log(req.body)
    
    Competitors.findOneAndUpdate({name:req.body.name, surname:req.body.surname, sex:req.body.sex}
      ,{$set: {medalWinner:true}},(err, data) => {
          if(err) {console.log(err)}
          else res.json({ msg: "dodat"})
      })

 
  }
 

}
