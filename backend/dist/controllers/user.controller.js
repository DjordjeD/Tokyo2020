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
        this.getUser = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ password: password, username: username }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let type = req.body.type;
            user_1.default.findOne({ password: password, username: username, type: type }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let newPassword = req.body.newPassword;
            user_1.default.updateOne({ password: password, username: username }, { password: newPassword }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let newPassword = req.body.newPassword;
            let type = req.body.type;
            let country = req.body.country;
            let name = req.body.name;
            let surname = req.body.surname;
            user_1.default.findOne({ password: password, username: username, type: type }, (err, user) => {
                if (err) {
                    let newUser = new user_1.default(req.body);
                    newUser
                        .save()
                        .then(() => {
                        res.status(200).json({ message: "ok" });
                    })
                        .catch((err) => {
                        console.log(err);
                        res.status(400).json({ message: err });
                    });
                }
                else
                    res.status(400).json({ message: err });
            });
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map