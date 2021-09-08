import express from "express";
import record from "../models/record";

export class recordController {
  getAllRecords = (req: express.Request, res: express.Response) => {
    record.find({}, (err, record) => {
      if (err) console.log(err);
      else res.json(record);
    });
  };
}
