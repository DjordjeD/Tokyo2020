"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Tournaments = new Schema({
    sportName: {
        type: "String",
    },
    disciplineName: {
        type: "String",
    },
    individual: {
        type: "Boolean",
    },
    type: {
        type: "String",
    },
    dateEnd: {
        type: "Date",
    },
    dateBegin: {
        type: "Date",
    },
    location: {
        type: ["String"],
    },
    teams: {
        type: ["Mixed"],
    },
    competitors: {
        type: ["Mixed"],
    },
    groupPhaseEvents: {
        type: ["Mixed"],
    },
    individualEvent: {},
    knockout: {},
    delegate: {
        username: {
            type: "String",
        },
        password: {
            type: "String",
        },
        name: {
            type: "String",
        },
        surname: {
            type: "String",
        },
        nationality: {
            type: "String",
        },
        email: {
            type: "String",
        },
        isDelegate: {
            type: "Boolean",
        },
    },
    format: {
        numberOfRounds: {
            type: "Number",
        },
        numberOfGroups: {
            type: "Number",
        },
        numberOfTeamsInGroup: {
            type: "Number",
        },
        resultFormat: {
            type: "String",
        },
    },
    started: {
        type: "Boolean",
    },
    ongoing: {
        type: "Boolean",
    },
    group1: {
        type: ["Mixed"],
    },
    group2: {
        type: ["Mixed"],
    },
    groupRounds: {
        type: ["Mixed"],
    },
    quarterFinals: {
        type: "Array",
    },
    semiFinals: {
        type: "Array",
    },
    teamFinals: {},
    teamThird: {},
    groupRoundsEnded: {
        type: ["Boolean"],
    },
    quarterFinalsStarted: {
        type: "Boolean",
    },
    semiFinalsStarted: {
        type: "Boolean",
    },
    thirdPlaceStarted: {
        type: "Boolean",
    },
    finalsStarted: {
        type: "Boolean",
    },
}, {
    versionKey: false,
});
exports.default = mongoose_1.default.model("Tournaments", Tournaments, "Tournaments");
//# sourceMappingURL=tournament.js.map