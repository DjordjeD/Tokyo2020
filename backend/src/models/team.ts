import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Teams = new Schema({
  teamName: {
    type: "String",
  },
  teamMembers: {
    type: ["Mixed"],
  },
  groupPoints: {
    type: "Number",
  },
},  {
 
  versionKey:false
});

export default mongoose.model("Teams", Teams, "Teams");
