"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const competitor_controller_1 = require("../controllers/competitor.controller");
const competitorRouter = express_1.default.Router();
competitorRouter
    .route('/getAllCompetitors')
    .get((req, res) => new competitor_controller_1.competitorController().getAllCompetitors(req, res));
competitorRouter
    .route('/searchCompetitors')
    .post((req, res) => new competitor_controller_1.competitorController().searchCompetitors(req, res));
exports.default = competitorRouter;
//# sourceMappingURL=competitor.routes.js.map