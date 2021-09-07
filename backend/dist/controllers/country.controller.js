"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryController = void 0;
const country_1 = __importDefault(require("../models/country"));
class countryController {
    constructor() {
        this.getAllCountries = (req, res) => {
            country_1.default.find({}, (err, country) => {
                if (err)
                    console.log(err);
                else
                    res.json(country);
            });
        };
    }
}
exports.countryController = countryController;
//# sourceMappingURL=country.controller.js.map