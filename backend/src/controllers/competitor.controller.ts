import express from 'express';
import competitor from '../models/competitor';



export class competitorController {

    getAllCompetitors = (req: express.Request, res: express.Response) => {
       
        competitor.find({},
            (err, competitor) => {
                if (err) console.log(err);
                else res.json(competitor);
            })
    }
}