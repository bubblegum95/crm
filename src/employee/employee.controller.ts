import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FindOptions } from './type/find-options.type';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll(
    @Query('options') options: FindOptions,
    @Query('value') value: string,
  ) {
    let val: string | number | Date;
    switch (options) {
      case FindOptions.name:
        val = value.toString();
        break;
      case FindOptions.phone:
        val = value.toString();
        break;
      case FindOptions.department:
        val = Number(value);
        break;
      case FindOptions.hireDate:
        val = new Date(value);
        break;
    }
    return await this.employeeService.findAll(options, val);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
