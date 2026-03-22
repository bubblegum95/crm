import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SelfStudy } from '../../self-study/entities/self-study.entity';
import { MajorCourse } from '../../major-course/entities/major-course.entity';

@Entity({ name: 'MAJOR' })
export class Major {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NAME', type: 'varchar2', length: 10, nullable: false })
  name: string;

  @OneToMany(() => MajorCourse, (majorCourses) => majorCourses.major)
  majorCourses: MajorCourse[];

  @OneToMany(() => SelfStudy, (selfStudy) => selfStudy.major)
  selfStudies: SelfStudy[];
}
