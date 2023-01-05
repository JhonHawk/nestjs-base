import * as mongoose from 'mongoose';


export const InterestsSchema = new mongoose.Schema({
    name:{
        type: String
    },
    secondLevel:[{
        interest_relation:{
          type: String
        },
        name:{
            type: String
        },
        thirdLevel: [{
            relation: String,
            name: String
        }]
    }]
});


export interface IInterest extends mongoose.Document{
    name: string;
    secondLevel: Array<{
        interest_relation: string,
        name: string,
        thirdLevel: Array<{
            relation:string,
            name: string
        }>
    }>
}