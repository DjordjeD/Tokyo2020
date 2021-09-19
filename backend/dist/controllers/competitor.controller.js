"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitorController = void 0;
const competitor_1 = __importDefault(require("../models/competitor"));
class competitorController {
    constructor() {
        this.getAllCompetitors = (req, res) => {
            competitor_1.default.find({}, (err, competitor) => {
                if (err)
                    console.log(err);
                else
                    res.json(competitor);
            });
        };
        this.searchCompetitors = (req, res) => {
            let name = req.body.name;
            let surname = req.body.surname;
            let countryName = req.body.countryName;
            let sportName = req.body.sportName;
            let disciplineName = req.body.disciplineName;
            let sex = req.body.sex;
            let medalWinner = req.body.medalWinner;
            if (name == null)
                name = "";
            if (surname == null)
                surname = "";
            // if(sportName==undefined) sportName ="";
            if (sex == '')
                sex = "";
            // if(disciplineName==undefined) disciplineName ="";
            if (countryName == null)
                countryName = "";
            //if(medalWinner == null) 
            console.log("search_competitors");
            console.log(req.body);
            competitor_1.default.find({
                name: { $regex: name.toString() },
                surname: { $regex: surname.toString() },
                'country.countryName': { $regex: countryName.toString() },
                sex: { $regex: sex.toString() }
                //medalWinner :{ $regex: medalWinner.toString()}
            }, (err, competitor) => {
                if (err)
                    console.log(err);
                else {
                    res.json(competitor);
                }
            });
        };
    }
}
exports.competitorController = competitorController;
//# sourceMappingURL=competitor.controller.js.map