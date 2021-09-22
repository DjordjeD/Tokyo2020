"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitorController = void 0;
const competitor_1 = __importDefault(require("../models/competitor"));
const country_1 = __importDefault(require("../models/country"));
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
            if (sex.length == 0)
                sex = "";
            // if(disciplineName==undefined) disciplineName ="";
            if (countryName == null)
                countryName = "";
            //if(medalWinner == null) 
            //console.log("search_competitors");
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
        this.addCompetitor = (req, res) => {
            let newSport = new competitor_1.default(req.body);
            newSport.save().then(() => {
                res.json(newSport);
            });
            console.log(req.body.country.countryName);
            country_1.default.findOneAndUpdate({ countryName: req.body.country.countryName }, { $inc: { numberOfAthletes: 1 } }, (err, data) => {
                if (err) {
                    console.log(err);
                }
            });
        };
    }
}
exports.competitorController = competitorController;
//# sourceMappingURL=competitor.controller.js.map