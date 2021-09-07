import express from 'express';
import { tournamentController } from '../controllers/tournament.controller';

const tournamentRouter = express.Router();

tournamentRouter.route('/getAllTournaments').post(
    (req, res) => new tournamentController().getAllTournaments(req, res)
);

export default tournamentRouter;