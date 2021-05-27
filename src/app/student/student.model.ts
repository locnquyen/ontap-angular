export class Student{
  studentID : string;
  studentName: string;
  studentBirthday: string;
  constructor(ID: string, Name: string, Birthday:string){
    this.studentID = ID;
    this.studentName = Name;
    this.studentBirthday = Birthday;
  }
}
