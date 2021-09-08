import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import tournamentRouter from "./routes/tournament.routes";
import sportRouter from "./routes/sport.routes";
import userRouter from "./routes/user.routes";
import countryRouter from "./routes/country.routes";
import recordRouter from "./routes/record.routes";
import competitorRouter from "./routes/competitor.routes";
import teamRouter from "./routes/team.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Tokyo2020");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo ok");
});

const router = express.Router();
router.use("/tournaments", tournamentRouter);
router.use("/sports", sportRouter);
router.use("/users", userRouter);
router.use("/countries", countryRouter);
router.use("/records", recordRouter);
router.use("/competitors", competitorRouter);
router.use("/teams", teamRouter);
app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
