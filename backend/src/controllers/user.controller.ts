import express from "express";
import user from "../models/user";

export class userController {
  getAllUsers = (req: express.Request, res: express.Response) => {
    user.find({}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
  getUser = (req: express.Request, res: express.Response) => {
    let username = req.params.username;
    let password = req.params.password;

    user.findOne({'password':password,'username':username}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
  login = (req: express.Request, res: express.Response) => {
    let username = req.params.username;
    let password = req.params.password;
    let type=req.params.type;

    user.findOne({'password':password,'username':username, 'type':type}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
  
  changePassword = (req: express.Request, res: express.Response) => {
    let username = req.params.username;
    let password = req.params.password;
    let newPassword = req.params.newPassword;

    user.updateOne({'password':password,'username':username},{'password':newPassword}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };


  register = (req: express.Request, res: express.Response) => {
    let username = req.params.username;
    let password = req.params.password;
    let newPassword = req.params.newPassword;
    let type = req.params.type;
    let country = req.params.country;
    let name = req.params.name;
    let surname = req.params.surname;

    //stao si ovde
  };


}
