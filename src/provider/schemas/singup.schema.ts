import { Schema, Document } from 'mongoose';


export const SignUpSchema = new Schema({
    email:{
        type: String
    }, 
    password:{
        type: String
    },  
    firstName:{
        type: String
    }, 
    lastName:{
        type: String
    },  
    phoneNumber:{
        type: String
    }
});


export interface ISignUp extends Document{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}