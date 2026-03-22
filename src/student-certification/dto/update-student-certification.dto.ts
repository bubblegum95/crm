import { PartialType } from '@nestjs/swagger';
import { CreateStudentCertificationDto } from './create-student-certification.dto';

export class UpdateStudentCertificationDto extends PartialType(CreateStudentCertificationDto) {}
