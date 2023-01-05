import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/provider/database.module';
import { InterestsController } from './interests.controller';
import { interestsProvider } from './interests.provider';
import { InterestsService } from './interests.service';

@Module({
    imports: [DatabaseModule],
    controllers: [InterestsController],
    providers: [InterestsService, ...interestsProvider],
})
export class InterestsModule {}
