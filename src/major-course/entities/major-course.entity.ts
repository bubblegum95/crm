import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Major } from '../../major/entities/major.entity';
import { Course } from '../../course/entities/course.entity';

@Entity({ name: 'MAJOR_COURSE' })
export class MajorCourse {
  @JoinColumn({ name: 'MAJOR_ID' })
  @ManyToOne(() => Major, (major) => major.majorCourses, { cascade: true })
  major: Major;

  @JoinColumn({ name: 'COURSE_ID' })
  @ManyToOne(() => Course, (course) => course.majorCourses, { cascade: true })
  course: Course;
}
