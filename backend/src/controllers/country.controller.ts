import express from 'express';
import country from '../models/country';



export class countryController {

    getAllCountries = (req: express.Request, res: express.Response) => {
       
        country.find({},
            (err, country) => {
                if (err) console.log(err);
                else res.json(country);
            })
    }
}