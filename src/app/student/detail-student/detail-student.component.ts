import { StudentService } from './../student.service';
import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  student: Student;
  id: number;

  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.student = this.studentService.getStudent(this.id)
        //console.log("id"+this.id)
      }
    )
  }
  onClickEditStudent() {
    this.router.navigate(['edit'], { relativeTo: this.route });

  }
}
