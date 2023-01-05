import { Body, Controller, Post, Get } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ApiTags } from '@nestjs/swagger';
import { IInterest } from '../../provider/schemas/interest.schema';
import { InterestsDTO } from './dtos/interests.dto';
import { InterestsService } from './interests.service';

@ApiTags('Interests')
@Controller('interests')
export class InterestsController {

    constructor(private readonly _interestService: InterestsService){}

    @Get()
    async getAll(){
        return [];
    }


    @Post()
    async createInterest(@Body() interest: InterestsDTO): Promise<IInterest>{
        try {
            return await this._interestService.createInterest(interest);
        } catch (error) {
            throw new HttpException('Ocurrio un error al crear.', HttpStatus.BAD_REQUEST);
            
        }
    }
    

}
