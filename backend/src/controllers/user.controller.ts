import express from "express";
import Users from "../models/user";

export class userController {
  getAllUsers = (req: express.Request, res: express.Response) => {
    Users.find({}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
  getUser = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;

    Users.findOne({ password: password, username: username }, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
  login = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;
    let type = req.body.type;

    Users.findOne(
      { password: password, username: username, type: type },
      (err, user) => {
        if (err) console.log(err);
        else res.json(user);
      }
    );
  };

  changePassword = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;
    let newPassword = req.body.newPassword;

    Users.updateOne(
      { password: password, username: username },
      { password: newPassword },
      (err, user) => {
        if (err) console.log(err);
        else res.json(user);
      }
    );
  };

  register = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;
    let newPassword = req.body.newPassword;
    let type = req.body.type;
    let country = req.body.country;
    let name = req.body.name;
    let surname = req.body.surname;
    console.log("register");
    Users.findOne(
      { password: password, username: username, type: type },
      (err, user) => {
        if (err) {
          let newUser = new Users(req.body);
          newUser
            .save()
            .then(() => {
              res.status(200).json({ message: "ok" });
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({ message: err });
            });
        } else res.status(400).json({ message: err });
      }
    );
  };
}
