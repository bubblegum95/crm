import { Module } from '@nestjs/common';
import { EntrollmentService } from './entrollment.service';
import { EntrollmentController } from './entrollment.controller';

@Module({
  controllers: [EntrollmentController],
  providers: [EntrollmentService],
})
export class EntrollmentModule {}
