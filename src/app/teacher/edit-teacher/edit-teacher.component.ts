import { TeacherService } from './../teacher.service';
import { NgForm } from '@angular/forms';
import { Teacher } from './../teacher.model';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacher: Teacher;
  editMode = false;
  editTeacherIndex: number;
  editTeacher: Teacher;
  @ViewChild('f') slForm: NgForm;
  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.startedEditing.subscribe(
      (index: number) => {
        this.editTeacherIndex = index;
        this.editMode = true;
        this.editTeacher = this.teacherService.getTeacher(index);
        this.slForm.setValue(
          {
            teacherID: this.editTeacher.teacherID,
            teacherName: this.editTeacher.teacherName
          }
        )
      }
    )
  }
  onAddTeacher(form: NgForm) {
    const value = form.value;
    this.teacher = new Teacher(value.teacherID, value.teacherName);

    if (this.editMode) {
      this.teacherService.updateTeacher(this.editTeacherIndex, this.teacher)
    } else {
      this.teacherService.onAddTeacher(this.teacher)
    }

  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  };

  onClearAllItem( ) {
    this.teacherService.onClearTeacher();
  }
  onDelete() {
    this.teacherService.onDeleteTeacher(this.editTeacherIndex);
    this.onClear();
  }
}
