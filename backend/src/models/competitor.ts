import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Competitors = new Schema({
  name: {
    type: "String",
  },
  surname: {
    type: "String",
  },
  sex: {
    type: "String",
  },
  country: {
    countryName: {
      type: "String",
    },
    flagImage: {
      type: "String",
    },
    numberOfAthletes: {
      type: "Number",
    },
  },
  competesIn: {
    type: ["Mixed"],
  },
  medalWinner: {
    type: "Boolean",
  },
},  {
 
  versionKey:false
});

export default mongoose.model("Competitors", Competitors, "Competitors");
