import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  students: Student[]
  constructor(private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
  onNewStudent() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onEditAStudent(index){
    this.studentService.startedEditing.emit(index);
  }
}
