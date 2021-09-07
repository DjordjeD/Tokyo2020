import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Countries = new Schema(

    {
        "countryName": {
          "type": "String"
        },
        "flagImage": {
          "type": "String"
        },
        "numberOfAthletes": {
          "type": "Number"
        }
      }
);

export default mongoose.model('Countries', Countries, 'Countries');