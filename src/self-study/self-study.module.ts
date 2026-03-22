import { Module } from '@nestjs/common';
import { SelfStudyService } from './self-study.service';
import { SelfStudyController } from './self-study.controller';

@Module({
  controllers: [SelfStudyController],
  providers: [SelfStudyService],
})
export class SelfStudyModule {}
