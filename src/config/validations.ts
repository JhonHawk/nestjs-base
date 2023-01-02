import * as Joi from 'joi';

export const validationConfigSchema = Joi.object({
  DATABASE_NAME: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  API_KEY: Joi.string().required(),
});
