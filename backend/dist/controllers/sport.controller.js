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
        };
        this.addSport = (req, res) => {
            //todos
        };
    }
}
exports.sportController = sportController;
//# sourceMappingURL=sport.controller.js.map