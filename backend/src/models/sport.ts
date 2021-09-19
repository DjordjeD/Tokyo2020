import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Sports = new Schema({
  sportName: {
    type: "String",
  },
  disciplines: {
    type: ["Mixed"],
  },
},  {
 
  versionKey:false
});

export default mongoose.model("Sports", Sports, "Sports");
