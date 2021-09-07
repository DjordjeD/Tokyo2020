import express from 'express';
import { competitorController } from '../controllers/competitor.controller';

const competitorRouter = express.Router();

competitorRouter.route('/getAllCompetitors').post(
    (req, res) => new competitorController().getAllCompetitors(req, res)
);

export default competitorRouter;