import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CertificatoinStatusType } from '../type/status.type';
import { SelfStudy } from '../../self-study/entities/self-study.entity';
import { Certification } from '../../certification/entities/certification.entity';

@Entity({ name: 'STUDENT_CERTIFICATION' })
export class StudentCertification {
  @Column({
    name: 'STATUS',
    type: 'enum',
    enum: CertificatoinStatusType,
    nullable: false,
  })
  status: CertificatoinStatusType;

  @Column({ name: 'CREDIT', type: 'number', nullable: false })
  credit: number;

  @JoinColumn({ name: 'SELF_STUDY_ID' })
  @ManyToOne(() => SelfStudy, (selfStudy) => selfStudy.studentCertifications, {
    cascade: ['insert', 'update'],
  })
  selfStudy: SelfStudy;

  @JoinColumn({ name: 'CERTIFICATION_ID' })
  @ManyToOne(
    () => Certification,
    (certification) => certification.studentCertifications,
    { cascade: ['insert', 'update'] },
  )
  certification: Certification;
}
