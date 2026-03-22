import { IsEnum, IsInt, IsNumber, Max, Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CourseCategory } from '../type/courseCategory.type';
import { CourseStatus } from '../type/courseStatus.type';
import { Course } from '../../course/entities/course.entity';
import { Student } from '../../student/entities/student.entity';
import { Refund } from '../../refund/entities/refund.entity';

@Entity({ name: 'ENTROLLMENT' })
export class Entrollment {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'COUPON', type: 'varchar2', nullable: true })
  coupon: string;

  @IsInt()
  @Min(0)
  @Column({ name: 'PRICE', type: 'number', nullable: true })
  price: number;

  @IsEnum(CourseCategory)
  @Column({
    name: 'COURSE_CATEGORY',
    type: 'enum',
    enum: CourseCategory,
    nullable: false,
  })
  courseCategory: CourseCategory;

  @IsEnum(CourseStatus)
  @Column({
    name: 'COURSE_STATUS',
    type: 'enum',
    enum: CourseStatus,
    nullable: false,
  })
  courseStatus: CourseStatus;

  @IsNumber()
  @Min(0)
  @Max(4.5)
  @Column({ name: 'TOTAL_SCORE', type: 'number' })
  totalScore: number;

  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'UPDATED_AT' })
  updatedAt: Date;

  @JoinColumn({ name: 'COURSE_ID' })
  @ManyToOne(() => Course, (course) => course.entrollments, {
    cascade: ['insert', 'update'],
  })
  course: Course;

  @JoinColumn({ name: 'STUDENT_ID' })
  @ManyToOne(() => Student, (student) => student.entrollments, {
    cascade: ['insert', 'update'],
  })
  student: Student;

  @OneToOne(() => Refund, (refund) => refund.entrollment)
  refund: Refund;
}
