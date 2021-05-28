
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { StartStudentComponent } from './student/start-student/start-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';




const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  {
    path: 'student', component: StudentComponent, children: [
      { path: '', component:StartStudentComponent },
      { path: 'new', component: EditStudentComponent },
      { path: ':id', component: DetailStudentComponent },
      { path: ':id/edit', component: EditStudentComponent },
    ]
  },
  { path: 'teacher', component: TeacherComponent, }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
