import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService],
})
export class StudentComponent implements OnInit {

  students :Student

  constructor() { }

  ngOnInit(): void {
  }

}
