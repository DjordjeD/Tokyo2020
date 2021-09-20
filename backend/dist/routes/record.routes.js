"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const record_controller_1 = require("../controllers/record.controller");
const recordRouter = express_1.default.Router();
recordRouter
    .route("/getAllRecords")
    .get((req, res) => new record_controller_1.recordController().getAllRecords(req, res));
exports.default = recordRouter;
//# sourceMappingURL=record.routes.js.map