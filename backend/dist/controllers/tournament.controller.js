"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tournamentController = void 0;
const tournament_1 = __importDefault(require("../models/tournament"));
class tournamentController {
    constructor() {
        this.getAllTournaments = (req, res) => {
            tournament_1.default.find({}, (err, tournament) => {
                if (err)
                    console.log(err);
                else
                    res.json(tournament);
            });
        };
        this.saveTournament = (req, res) => {
            let newTournament = new tournament_1.default(req.body);
            tournament_1.default.findOne({
                sportName: req.body.sportName,
                disciplineName: req.body.disciplineName
            }, (err, tournament) => {
                if (err)
                    console.log(err);
                else if (tournament) {
                    res.json({ msg: "greska" });
                }
                else {
                    newTournament
                        .save()
                        .then(() => {
                        res.status(200).json({ msg: "dodat" });
                    })
                        .catch((err) => {
                        console.log(err);
                        res.status(400).json({ message: err });
                    });
                }
            });
        };
        this.updateTournament = (req, res) => {
            //console.log(req.body);
            //"projection":{ "_id": 0},
            var tournament = req.body;
            let options = { "projection": { "_id": 0 }, "upsert": true, returnOriginal: false };
            tournament_1.default.collection.findOneAndReplace({ sportName: req.body.sportName,
                disciplineName: req.body.disciplineName }, tournament, options, (err, data) => {
                if (err)
                    console.log(err + "ERROR");
                else
                    res.json({ msg: "dodat" });
                console.log(data);
            });
        };
    }
}
exports.tournamentController = tournamentController;
//# sourceMappingURL=tournament.controller.js.map