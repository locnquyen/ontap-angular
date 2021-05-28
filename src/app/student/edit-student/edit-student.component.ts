import { StudentService } from './../student.service';
import { Student } from './../student.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editMode = false;
  student: Student;
  id: number;
  studentForm: FormGroup;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let ID = '';
    let Name = '';
    let Birthday = '';

    if (this.editMode) {
      const student = this.studentService.getStudent(this.id);
      ID = student.studentID;
      Name = student.studentName;
      Birthday = student.studentBirthday;
    }

    this.studentForm = new FormGroup({
      'id': new FormControl(ID, Validators.required),
      'name': new FormControl(Name, Validators.required),
      'birthday': new FormControl(Birthday, Validators.required)
    });
  }

  onSubmit() {
    if(this.editMode)
    {
      this.studentService.updateStudent(this.id, this.studentForm.value)
    }
    else
    {
      this.studentService.addStudent(this.studentForm.value);
      
    }
  }

}
