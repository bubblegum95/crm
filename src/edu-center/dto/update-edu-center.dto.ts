import { PartialType } from '@nestjs/mapped-types';
import { CreateEduCenterDto } from './create-edu-center.dto';

export class UpdateEduCenterDto extends PartialType(CreateEduCenterDto) {}
