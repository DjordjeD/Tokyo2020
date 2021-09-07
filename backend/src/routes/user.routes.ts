import express from 'express';
import { userController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/getAllUsers').post(
    (req, res) => new userController().getAllUsers(req, res)
);

export default userRouter;