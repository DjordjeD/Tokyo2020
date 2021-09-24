import express from "express";
import user from "../models/user";
import Users from "../models/user";
import UserRequests from "../models/userRequest";

export class userController {
  getAllUsers = (req: express.Request, res: express.Response) => {
    Users.find({}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };

  getAllUserRequests = (req: express.Request, res: express.Response) => {
    UserRequests.find({}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
  getDelegates = (req: express.Request, res: express.Response) => {
    Users.find({ isDelegate: true }, (err, user) => {
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
    let isDelegate = req.body.type;

    Users.findOne(
      { password: password, username: username, isDelegate: isDelegate },
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
    console.log(req.body);
    Users.updateOne(
      { password: password, username: username },
      { $set: { password: newPassword } },
      (err, user) => {
        if (err) console.log(err);
        else res.json(user);
      }
    );
  };

  register = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;

    let isDelegate = req.body.isDelegate;
    let nationality = req.body.nationality;
    let name = req.body.name;
    let surname = req.body.surname;
    //console.log("register");

    let newUser = new UserRequests(req.body);

    newUser
      .save()
      .then(() => {
        res.status(200).json(newUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: err });
      });
  };

  acceptUser = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;

    let isDelegate = req.body.isDelegate;
    let nationality = req.body.nationality;
    let name = req.body.name;
    let surname = req.body.surname;

    UserRequests.collection.findOneAndDelete(
      {
        username: username,
        password: password,
        isDelegate: isDelegate,
        nationality: nationality,
      },
      (err, user) => {
        if (err) console.log(err);
        else console.log("obrisan");
      }
    );
    //console.log("register");

    let newUser = new Users(req.body);

    newUser
      .save()
      .then(() => {
        res.status(200).json(newUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: err });
      });
  };
}
