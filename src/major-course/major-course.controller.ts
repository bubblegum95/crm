import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MajorCourseService } from './major-course.service';
import { CreateMajorCourseDto } from './dto/create-major-course.dto';
import { UpdateMajorCourseDto } from './dto/update-major-course.dto';

@Controller('major-course')
export class MajorCourseController {
  constructor(private readonly majorCourseService: MajorCourseService) {}

  @Post()
  create(@Body() createMajorCourseDto: CreateMajorCourseDto) {
    return this.majorCourseService.create(createMajorCourseDto);
  }

  @Get()
  findAll() {
    return this.majorCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.majorCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMajorCourseDto: UpdateMajorCourseDto) {
    return this.majorCourseService.update(+id, updateMajorCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.majorCourseService.remove(+id);
  }
}
