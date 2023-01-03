import { Module } from '@nestjs/common';
import { mongoProviders } from './mongoose';


@Module({
	providers: [...mongoProviders],
	exports: [...mongoProviders],
})
export class DatabaseModule { }
