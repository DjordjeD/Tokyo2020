"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamController = void 0;
const team_1 = __importDefault(require("../models/team"));
class teamController {
    constructor() {
        this.getAllTeams = (req, res) => {
            team_1.default.find({}, (err, team) => {
                if (err)
                    console.log(err);
                else
                    res.json(team);
            });
        };
    }
}
exports.teamController = teamController;
//# sourceMappingURL=team.controller.js.map