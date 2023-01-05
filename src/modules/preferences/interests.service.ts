import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { modelsMongo } from '../../config/constants';
import { IInterest } from '../../provider/schemas/interest.schema';
import { InterestsDTO } from './dtos/interests.dto';

@Injectable()
export class InterestsService {
    constructor(
        @Inject(modelsMongo.InterestsSchema) private _interest: Model<IInterest>,
    ){}



    async createInterest(interest: Partial<InterestsDTO>): Promise<IInterest>{
        let created_interest = await this._interest.create({
            ...interest
        });
        return created_interest;
    }


}
