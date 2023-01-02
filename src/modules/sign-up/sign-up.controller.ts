import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sign-up')
@Controller('sign-up')
export class SignUpController {
  @Post('')
  public async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
    return signUpDto;
  }
}
