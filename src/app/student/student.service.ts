import { EventEmitter, Injectable } from "@angular/core";
import { Student } from "./student.model";
@Injectable({
  providedIn: 'root',
  })
export class StudentService {
  startedEditing = new EventEmitter<number>();

  private students: Student[] = [
    new Student("17DH110087", "Nguyễn Công Lộc", "09/12/1998"),
    new Student("17DH110070", "Trần Trung Hậu", "06/03/1999"),
    new Student("17DH110260", "Nguyễn Huỳnh Minh Mẫn", "lượm ngoài đường")
  ]

  getStudents() {
    return this.students
  }
  getStudent(index: number) {
    return this.students[index]
  }
  addStudent(st :Student){
    this.students.push(st);
  }
}
