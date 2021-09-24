import mongoose from "mongoose";

const Schema = mongoose.Schema;

let UserRequests = new Schema({
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

},  {
 
  versionKey:false
});

export default mongoose.model("UserRequests", UserRequests, "UserRequests");
