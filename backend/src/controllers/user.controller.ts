import express from "express";
import Users from "../models/user";

export class userController {
  getAllUsers = (req: express.Request, res: express.Response) => {
    Users.find({}, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };

  getDelegates = (req: express.Request, res: express.Response) => {
    Users.find({'isDelegate':true}, (err, user) => {
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
    
    let isDelegate = req.body.isDelegate;
    let nationality = req.body.nationality;
    let name = req.body.name;
    let surname = req.body.surname;
    console.log("register");
    Users.findOne(
      { password: password, username: username, isDelegate: isDelegate },
      (err, user) => {
        if (user) {
          let newUser = new Users(req.body);
         // if(isDelegate==false && newUser.isDelegate==false) slucaj kada hocu nacionalu delegaciju da doodam

          if(user == null)
          {
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
          else {
            res.json({ message: "Korisnik vec postoji" });
          } 
         
        } else {
          res.json({ message: err });
        }
      }
    );
  };
}
