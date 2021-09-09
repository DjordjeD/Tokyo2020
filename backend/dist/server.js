"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const tournament_routes_1 = __importDefault(require("./routes/tournament.routes"));
const sport_routes_1 = __importDefault(require("./routes/sport.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const country_routes_1 = __importDefault(require("./routes/country.routes"));
const record_routes_1 = __importDefault(require("./routes/record.routes"));
const competitor_routes_1 = __importDefault(require("./routes/competitor.routes"));
const team_routes_1 = __importDefault(require("./routes/team.routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/Tokyo2020");
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("mongo ok");
});
const router = express_1.default.Router();
router.use("/tournaments", tournament_routes_1.default);
router.use("/sports", sport_routes_1.default);
router.use("/users", user_routes_1.default);
router.use("/countries", country_routes_1.default);
router.use("/records", record_routes_1.default);
router.use("/competitors", competitor_routes_1.default);
router.use("/teams", team_routes_1.default);
app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map