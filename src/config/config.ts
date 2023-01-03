import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('app', () => {
  return {
    port: process.env.PORT,
    database: {
      name: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    mongo: {
      connection: process.env.MONGO_CONNECTION
    },
    apiKey: process.env.API_KEY,
  };
});
