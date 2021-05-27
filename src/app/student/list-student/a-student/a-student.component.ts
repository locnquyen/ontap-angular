import { StudentService } from './../../student.service';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../student.model';

@Component({
  selector: 'app-a-student',
  templateUrl: './a-student.component.html',
  styleUrls: ['./a-student.component.css']
})
export class AStudentComponent implements OnInit {
  @Input() student:Student;
  @Input() index: number;
  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
  }

}
