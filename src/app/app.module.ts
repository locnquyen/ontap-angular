import { DropdownDirective } from './student/share/dropdown.directive';
import { StudentService } from './student/student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AStudentComponent } from './student/list-student/a-student/a-student.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartStudentComponent } from './student/start-student/start-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    TeacherComponent,
    ListStudentComponent,
    AStudentComponent,
    DetailStudentComponent,
    StartStudentComponent,
    DropdownDirective,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
