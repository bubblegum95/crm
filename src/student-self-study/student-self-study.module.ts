import { Module } from '@nestjs/common';
import { StudentSelfStudyService } from './student-self-study.service';
import { StudentSelfStudyController } from './student-self-study.controller';

@Module({
  controllers: [StudentSelfStudyController],
  providers: [StudentSelfStudyService],
})
export class StudentSelfStudyModule {}
