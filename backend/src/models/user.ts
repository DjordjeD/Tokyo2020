import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Users = new Schema({
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
});

export default mongoose.model("Users", Users, "Users");
