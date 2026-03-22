import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrollmentService } from './entrollment.service';
import { CreateEntrollmentDto } from './dto/create-entrollment.dto';
import { UpdateEntrollmentDto } from './dto/update-entrollment.dto';

@Controller('entrollment')
export class EntrollmentController {
  constructor(private readonly entrollmentService: EntrollmentService) {}

  @Post()
  create(@Body() createEntrollmentDto: CreateEntrollmentDto) {
    return this.entrollmentService.create(createEntrollmentDto);
  }

  @Get()
  findAll() {
    return this.entrollmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrollmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrollmentDto: UpdateEntrollmentDto) {
    return this.entrollmentService.update(+id, updateEntrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrollmentService.remove(+id);
  }
}
