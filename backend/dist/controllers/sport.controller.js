"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sportController = void 0;
const sport_1 = __importDefault(require("../models/sport"));
class sportController {
    constructor() {
        this.getAllSports = (req, res) => {
            sport_1.default.find({}, (err, sport) => {
                if (err)
                    console.log(err);
                else
                    res.json(sport);
            });
        };
        this.addDiscipline = (req, res) => {
            //todos
            console.log("addDiscipline");
            let disciplineType1 = {
                sportName: req.body.sportName,
                disciplineName: req.body.disciplineName,
                individual: req.body.type,
                min: req.body.min,
                max: req.body.max,
            };
            let bool = true;
            let sportName = req.body.sportName;
            res.json({ "message": "kurac" });
            // Sports.findOne(
            //   { 'disciplines.disciplineName': req.body.disciplineName },
            //   (err, result) => {
            //     if (err) console.log(err);
            //     else if (!result) {
            //       console.log("nema ove discipline");
            //       bool = false;
            //     }
            //   }
            // );
            console.log("addDiscipline");
            // if (bool) {
            //   Sports.collection.updateOne(
            //     { sportName: sportName },
            //     { $push: { disciplines: disciplineType1 } },
            //     (err, result) => {
            //       if (err) console.log(err);
            //       else res.json(result);
            //     }
            //   );
            // }
        };
        this.addSport = (req, res) => {
            //todos
            let smthn = {
                sportName: req.body.sportName,
            };
            // console.log(req.body.sportName);
            sport_1.default.findOne({ sportName: req.body.sportName }, (err, result) => {
                if (err)
                    console.log(err);
                else {
                    if (!result) {
                        let newSport = new sport_1.default(smthn);
                        newSport.save().then(() => {
                            res.json(newSport);
                        });
                    }
                }
            });
        };
    }
}
exports.sportController = sportController;
//# sourceMappingURL=sport.controller.js.map