"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_controller_1 = require("../controllers/team.controller");
const teamRouter = express_1.default.Router();
teamRouter
    .route("/getAllTeams")
    .get((req, res) => new team_controller_1.teamController().getAllTeams(req, res));
exports.default = teamRouter;
//# sourceMappingURL=team.routes.js.map