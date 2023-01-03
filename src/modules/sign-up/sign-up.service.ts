import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { modelsMongo } from '../../config/constants';
import { ISignUp } from '../../provider/schemas/singup.schema';

@Injectable()
export class SignUpService {
    constructor(
        @Inject(modelsMongo.SignUp) private signUp: Model<ISignUp>,
    ){}
}
