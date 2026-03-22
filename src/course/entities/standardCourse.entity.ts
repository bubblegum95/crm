import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

@Entity({ name: 'STANDARD_COURSE' })
export class StandardCourse {
  @Column({
    name: 'ID',
    type: 'varchar2',
    length: 10,
    nullable: false,
  })
  id: string;

  @Column({ name: 'NAME', type: 'varchar2', length: 10, nullable: false })
  name: string;

  @OneToMany(() => Course, (courses) => courses.standardCourse)
  courses: Course[];
}
