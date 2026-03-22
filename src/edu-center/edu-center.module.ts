import { Module } from '@nestjs/common';
import { EduCenterService } from './edu-center.service';
import { EduCenterController } from './edu-center.controller';

@Module({
  controllers: [EduCenterController],
  providers: [EduCenterService],
})
export class EduCenterModule {}
