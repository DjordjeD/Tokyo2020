import express from "express";
import user from "../models/user";

export class userController {
  getAllUsers = (req: express.Request, res: express.Response) => {
    user.find({}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
}
