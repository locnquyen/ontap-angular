import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../../student.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  //id: number;
  editMode = false;
  student: Student;
  editStudent: Student;
  editStudentIndex: number;
  @ViewChild('f') slForm: NgForm;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.editMode = params['id'] != null;
    //     }
    //   );
    this.studentService.startedEditing.subscribe(
      (index: number) => {
        this.editStudentIndex = index;
        this.editMode = true;
        this.slForm.setValue(
          {
            studentID: this.editStudent.studentID,
            studentName: this.editStudent.studentName,
            studentBirthday: this.editStudent.studentBirthday
          }
        )
      }
    )
  }

  onAddStudent(form: NgForm) {
    const value = form.value;
    this.student = new Student(value.studentID, value.studentName, value.studentBirthday);
    this.studentService.addStudent(this.student)
  }
  onEditStudent(index) {

  }

}
