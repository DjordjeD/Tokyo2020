"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Records = new Schema({
    discipline: {
        disciplineName: {
            type: "String",
        },
        individual: {
            type: "Boolean",
        },
        min: {
            type: "Number",
        },
        max: {
            type: "Number",
        },
    },
    date: {
        type: "Date",
    },
    athleteName: {
        type: "String",
    },
    athleteCountry: {
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
    result: {
        type: "String",
    },
});
exports.default = mongoose_1.default.model("Records", Records, "Records");
//# sourceMappingURL=record.js.map