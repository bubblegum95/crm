import { IsString } from 'class-validator';
import { Department } from '../entities/department.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @IsString()
  @ApiProperty({ name: '이름', type: 'string', required: true })
  name: string;

  @IsString()
  @ApiProperty({ name: '휴대번호', type: 'string', required: true })
  phone: string;

  @IsString()
  @ApiProperty({ name: '입사일자', type: 'string', required: true })
  hireDate: Date;

  @ApiProperty({ name: '소속 부서', type: Department, required: true })
  department: Department;
}
