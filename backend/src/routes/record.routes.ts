import express from 'express';
import { recordController } from '../controllers/record.controller';

const recordRouter = express.Router();

recordRouter.route('/getAllRecords').post(
    (req, res) => new recordController().getAllRecords(req, res)
);

export default recordRouter;