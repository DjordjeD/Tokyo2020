"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Countries = new Schema({
    countryName: {
        type: "String",
    },
    flagImage: {
        type: "String",
    },
    numberOfAthletes: {
        type: "Number",
    },
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model("Countries", Countries, "Countries");
//# sourceMappingURL=country.js.map