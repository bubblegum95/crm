import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from '../../course/entities/course.entity';

@Entity({ name: 'SEMESTER' })
export class Semester {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: string;

  @Column({
    name: 'NAME',
    type: 'varchar2',
    length: 10,
    nullable: true,
    unique: true,
  })
  name: string;

  @Column({ name: 'START_DATE', type: 'date', nullable: false })
  startDate: Date;

  @Column({ name: 'END_DATE', type: 'date', nullable: false })
  END_DATE: Date;

  @OneToMany(() => Course, (courses) => courses.semester)
  courses: Course[];
}
