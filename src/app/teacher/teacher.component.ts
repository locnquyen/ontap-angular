import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[]
  constructor( private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teachers = this.teacherService.getTeachers();
  }
  onEditTeacher(index){
    this.teacherService.startedEditing.emit(index)
  }
}
