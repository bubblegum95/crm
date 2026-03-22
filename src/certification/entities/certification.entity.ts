import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentCertification } from '../../student-certification/entities/student-certification.entity';

@Entity({ name: 'CERTIFICATION' })
export class Certification {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'NAME', type: 'varchar2', unique: true, nullable: false })
  name: string;

  @Column({ name: 'JOB_CODE', type: 'varchar2', nullable: false })
  jobCode: string;

  @OneToMany(
    () => StudentCertification,
    (studentCertifications) => studentCertifications.certification,
  )
  studentCertifications: StudentCertification[];
}
