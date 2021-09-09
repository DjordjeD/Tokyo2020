"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordController = void 0;
const record_1 = __importDefault(require("../models/record"));
class recordController {
    constructor() {
        this.getAllRecords = (req, res) => {
            record_1.default.find({}, (err, record) => {
                if (err)
                    console.log(err);
                else
                    res.json(record);
            });
        };
    }
}
exports.recordController = recordController;
//# sourceMappingURL=record.controller.js.map