import * as mongoose from 'mongoose';
import { enumDatabases } from '../config/constants';

import registerAs from '../config/config';

export const mongoProviders = [
	{
		provide: enumDatabases.Unique,
		useFactory: async (): Promise<any>  => {
            try {
                await mongoose.createConnection(registerAs().mongo.connection, {})
                console.log('[MONGO-CONNECTION]', true);
            } catch (error) {
                console.log('[MONGO-ERROR]', error);
            }
        },
	},

];
