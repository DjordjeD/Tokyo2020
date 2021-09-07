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
    }
}
exports.tournamentController = tournamentController;
//# sourceMappingURL=tournament.controller.js.map