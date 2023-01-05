import { model } from "mongoose";
import { InterestsSchema } from "../../provider/schemas/interest.schema";
import { enumDatabases, modelsMongo } from "../../config/constants";

export const interestsProvider = [
	{
			provide: modelsMongo.InterestsSchema,
			useFactory: () => model('interests', InterestsSchema), 
			inject: [enumDatabases.Unique],
	},
];
