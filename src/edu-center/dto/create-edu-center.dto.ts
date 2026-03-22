import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateEduCenterDto {
  @IsString()
  @MaxLength(20)
  @ApiProperty({ name: '교육원이름', required: true, type: 'string' })
  name: string;

  @IsString()
  @MaxLength(10)
  @ApiProperty({ name: '사업자등록번호' })
  businessNum: string;

  @IsString()
  @MaxLength(10)
  @ApiProperty({ name: '연락처', type: 'string', required: false })
  phone: string;
}
