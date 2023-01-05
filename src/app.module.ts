import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { validationConfigSchema } from './config/validations';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { InterestsModule } from './modules/preferences/interests.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [config],
      cache: true,
      validationSchema: validationConfigSchema,
    }),
    SignUpModule,
    InterestsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
