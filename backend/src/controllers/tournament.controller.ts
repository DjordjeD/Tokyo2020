import express from 'express';
import tournament from '../models/tournament';



export class tournamentController {



    getAllTournaments = (req: express.Request, res: express.Response) => {
       
        tournament.find({},
            (err, tournament) => {
                if (err) console.log(err);
                else res.json(tournament);
            })
    }
}