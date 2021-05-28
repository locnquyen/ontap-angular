import { EventEmitter, Injectable } from '@angular/core';
import { Teacher } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  startedEditing = new EventEmitter<number>();
  private teachers : Teacher[] =[
    new Teacher(53333,"Nguyen Thi C"),
    new Teacher(53334,"Tran Van D")
  ]

  getTeachers (){
    return this.teachers;
  }
  getTeacher(index:number){
    return this.teachers[index];
  }
  onAddTeacher(teacher : Teacher){
    this.teachers.push(teacher);
  }
  onDeleteTeacher(index:number){
    this.teachers.splice(index,1);

  }
  onClearTeacher(){
    this.teachers.splice(0,this.teachers.length);

  }
  updateTeacher(index:number, newTeacher:Teacher){
    this.teachers[index] = newTeacher;
  }
  constructor() { }
}
