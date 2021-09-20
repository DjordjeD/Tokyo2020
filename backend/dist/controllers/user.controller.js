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
        this.getDelegates = (req, res) => {
            user_1.default.find({ isDelegate: true }, (err, user) => {
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
            let isDelegate = req.body.type;
            user_1.default.findOne({ password: password, username: username, isDelegate: isDelegate }, (err, user) => {
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
            console.log(req.body);
            user_1.default.updateOne({ password: password, username: username }, { $set: { password: newPassword } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let isDelegate = req.body.isDelegate;
            let nationality = req.body.nationality;
            let name = req.body.name;
            let surname = req.body.surname;
            //console.log("register");
            let newUser = new user_1.default(req.body);
            user_1.default.findOne({ password: password, username: username, isDelegate: isDelegate, nationality: nationality }, (err, user) => {
                if (user) {
                    res.json({ message: "user already registered" });
                }
            });
            newUser
                .save()
                .then(() => {
                res.status(200).json(newUser);
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ message: err });
            });
            //   Users.findOne(
            //     { password: password, username: username, isDelegate: isDelegate },
            //     (err, user) => {
            //       if (user) {
            //         let newUser = new Users(req.body);
            //        // if(isDelegate==false && newUser.isDelegate==false) slucaj kada hocu nacionalu delegaciju da doodam
            //         if(user == null)
            //         {
            //           newUser
            //           .save()
            //           .then(() => {
            //             res.status(200).json({ message: "ok" });
            //           })
            //           .catch((err) => {
            //             console.log(err);
            //             res.status(400).json({ message: err });
            //           });
            //         }
            //         else {
            //           res.json({ message: "Korisnik vec postoji" });
            //         }
            //       } else {
            //         res.json({ message: err });
            //       }
            //     }
            //   );
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map