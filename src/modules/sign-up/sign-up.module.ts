import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../provider/database.module';
import { signUpProvider } from './signup.provider';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SignUpController],
  providers: [SignUpService, ...signUpProvider],
})
export class SignUpModule {}
