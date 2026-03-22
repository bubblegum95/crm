import { Module } from '@nestjs/common';
import { StudentCertificationService } from './student-certification.service';
import { StudentCertificationController } from './student-certification.controller';

@Module({
  controllers: [StudentCertificationController],
  providers: [StudentCertificationService],
})
export class StudentCertificationModule {}
