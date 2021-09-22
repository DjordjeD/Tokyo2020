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
        this.addTeam = (req, res) => {
            let newTeam = new team_1.default(req.body);
            newTeam.save().then(() => res.json(newTeam));
        };
        this.updateTeam = (req, res) => {
            let newTeam = new team_1.default(req.body);
            let options = {
                projection: { _id: 0 },
                upsert: true,
                returnOriginal: false,
            };
            team_1.default.collection.findOneAndReplace({ teamName: req.body.teamName }, newTeam, options, (err, data) => {
                if (err)
                    console.log(err + "ERROR");
                else
                    res.json({ msg: "dodat" });
                console.log(data);
            });
        };
    }
}
exports.teamController = teamController;
//# sourceMappingURL=team.controller.js.map