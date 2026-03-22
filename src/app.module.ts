import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { EduCenterModule } from './edu-center/edu-center.module';
import { MajorModule } from './major/major.module';
import { EntrollmentModule } from './entrollment/entrollment.module';
import { RefundModule } from './refund/refund.module';
import { SelfStudyModule } from './self-study/self-study.module';
import { StudentSelfStudyModule } from './student-self-study/student-self-study.module';
import { CertificationModule } from './certification/certification.module';
import { StudentCertificationModule } from './student-certification/student-certification.module';
import { NoticeModule } from './notice/notice.module';
import { SemesterModule } from './semester/semester.module';
import { MajorCourseModule } from './major-course/major-course.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './lib/http-exception.filter';

@Module({
  imports: [
    EmployeeModule,
    EduCenterModule,
    CourseModule,
    StudentModule,
    MajorModule,
    EntrollmentModule,
    RefundModule,
    SelfStudyModule,
    StudentSelfStudyModule,
    CertificationModule,
    StudentCertificationModule,
    NoticeModule,
    SemesterModule,
    MajorCourseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
