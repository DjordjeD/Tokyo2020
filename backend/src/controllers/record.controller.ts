import express from "express";
import Records from "../models/record";

export class recordController {
  getAllRecords = (req: express.Request, res: express.Response) => {
    Records.find({}, (err, record) => {
      if (err) console.log(err);
      else res.json(record);
      console.log("")
    });
  };
}
