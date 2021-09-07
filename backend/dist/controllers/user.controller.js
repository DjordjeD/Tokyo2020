"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = __importDefault(require("../models/user"));
class userController {
    constructor() {
        this.getAllUsers = (req, res) => {
            user_1.default.find({}, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map