import { model } from "mongoose";
import { enumDatabases, modelsMongo } from "../../config/constants";
import { SignUpSchema } from "../../provider/schemas/singup.schema";


export const signUpProvider = [
	{
			provide: modelsMongo.SignUp,
			useFactory: () => {
				model('signup', SignUpSchema)
			},
			inject: [enumDatabases.Unique],
	},
];
