import { PartialType } from '@nestjs/swagger';
import { CreateSelfStudyDto } from './create-self-study.dto';

export class UpdateSelfStudyDto extends PartialType(CreateSelfStudyDto) {}
