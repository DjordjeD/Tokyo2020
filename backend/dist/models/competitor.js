"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Competitors = new Schema({
    name: {
        type: "String",
    },
    surname: {
        type: "String",
    },
    sex: {
        type: "String",
    },
    country: {
        countryName: {
            type: "String",
        },
        flagImage: {
            type: "String",
        },
        numberOfAthletes: {
            type: "Number",
        },
    },
    competesIn: {
        type: ["Mixed"],
    },
    medalWinner: {
        type: "Boolean",
    },
});
exports.default = mongoose_1.default.model("Competitors", Competitors, "Competitors");
//# sourceMappingURL=competitor.js.map