"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tournament_controller_1 = require("../controllers/tournament.controller");
const tournamentRouter = express_1.default.Router();
tournamentRouter
    .route("/getAllTournaments")
    .get((req, res) => new tournament_controller_1.tournamentController().getAllTournaments(req, res));
tournamentRouter
    .route("/saveTournament")
    .post((req, res) => new tournament_controller_1.tournamentController().saveTournament(req, res));
exports.default = tournamentRouter;
//# sourceMappingURL=tournament.routes.js.map