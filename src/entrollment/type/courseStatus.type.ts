export enum CourseStatus {
  COMPLETED = 'COMPLETED', // 수료
  INCOMPLETE = 'INCOMPLETE', // 미수료
  PASS = 'PASS', // 이수(P/F 과목용)
  FAIL = 'FAIL', // 과락(F학점)
  PROCESSING = 'PROCESSING', // 수강 중 (아직 결과 안 나옴)
}
