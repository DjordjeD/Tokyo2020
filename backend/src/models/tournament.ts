import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
  individualEvents: {
    type: ["Mixed"],
  },
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
});

export default mongoose.model("Tournaments", Tournaments, "Tournaments");
