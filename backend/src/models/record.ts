import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Records = new Schema(
    {
        "discipline": {
          "disciplineName": {
            "type": "String"
          },
          "individual": {
            "type": "Boolean"
          },
          "min": {
            "type": "Number"
          },
          "max": {
            "type": "Number"
          }
        },
        "date": {
          "type": "Date"
        },
        "athleteName": {
          "type": "String"
        },
        "athleteCountry": {
          "countryName": {
            "type": "String"
          },
          "flagImage": {
            "type": "String"
          },
          "numberOfAthletes": {
            "type": "Number"
          }
        },
        "result": {
          "type": "String"
        }
      }
);

export default mongoose.model('Records', Records, 'Records');