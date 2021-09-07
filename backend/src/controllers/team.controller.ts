import express from 'express';
import team from '../models/team';



export class teamController {

    getAllTeams = (req: express.Request, res: express.Response) => {
       
        team.find({},
            (err, team) => {
                if (err) console.log(err);
                else res.json(team);
            })
    }
}