import { IsDate, IsInt, Max, Min } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EduCenter } from '../../edu-center/entities/edu-center.entity';
import { StandardCourse } from './standardCourse.entity';
import { Entrollment } from '../../entrollment/entities/entrollment.entity';
import { Semester } from '../../semester/entities/semester.entity';
import { MajorCourse } from '../../major-course/entities/major-course.entity';

@Entity({ name: 'COURSE' })
export class Course {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NAME', type: 'varchar2', length: 20, nullable: false })
  name: string;

  @IsInt()
  @Min(2)
  @Max(5)
  @Column({ name: 'CREDIT', type: 'number', nullable: false })
  credit: number;

  @IsDate()
  @Column({ name: 'START_DATE', type: 'datetime', nullable: false })
  startDate: Date;

  @Column({
    name: 'IS_CANCELLED',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  isCancelled: Boolean;

  @JoinColumn({ name: 'EDU_CENTER_ID' })
  @ManyToOne(() => EduCenter, (eduCenter) => eduCenter.courses, {
    cascade: ['insert', 'update'],
  })
  eduCenter: EduCenter;

  @JoinColumn({ name: 'COURSE_CODE' })
  @ManyToOne(() => StandardCourse, (standardCourse) => standardCourse.courses, {
    cascade: ['insert', 'update'],
  })
  standardCourse: StandardCourse;

  @JoinColumn({ name: 'SEMESTER_ID' })
  @ManyToOne(() => Semester, (semester) => semester.courses, {
    cascade: ['insert', 'update'],
  })
  semester: Semester;

  @OneToMany(() => Entrollment, (entrollments) => entrollments.course)
  entrollments: Entrollment[];

  @OneToMany(() => MajorCourse, (majorCourse) => majorCourse.course)
  majorCourses: MajorCourse[];
}
