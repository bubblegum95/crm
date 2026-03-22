import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrollmentDto } from './create-entrollment.dto';

export class UpdateEntrollmentDto extends PartialType(CreateEntrollmentDto) {}
