"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter
    .route("/getAllUsers")
    .post((req, res) => new user_controller_1.userController().getAllUsers(req, res));
userRouter
    .route("/login")
    .post((req, res) => new user_controller_1.userController().login(req, res));
userRouter
    .route("/register")
    .post((req, res) => new user_controller_1.userController().register(req, res));
userRouter
    .route("/changePassword")
    .post((req, res) => new user_controller_1.userController().changePassword(req, res));
userRouter
    .route("/getUser")
    .post((req, res) => new user_controller_1.userController().getUser(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map