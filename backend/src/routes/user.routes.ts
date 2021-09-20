import express from "express";
import { userController } from "../controllers/user.controller";

const userRouter = express.Router();

  userRouter
  .route("/getAllUsers")
  .post((req, res) => new userController().getAllUsers(req, res));

  userRouter
  .route("/getDelegates")
  .get((req, res) => new userController().getDelegates(req, res));

  userRouter
  .route("/login")
  .post((req, res) => new userController().login(req, res));

  userRouter
  .route("/register")
  .post((req, res) => new userController().register(req, res));


  userRouter
  .route("/changePassword")
  .post((req, res) => new userController().changePassword(req, res));

  
  userRouter
  .route("/getUser")
  .post((req, res) => new userController().getUser(req, res));

export default userRouter;
