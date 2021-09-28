import {Component, OnInit} from '@angular/core';
import {ExamService} from "../../services/exam.service";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  role!: string | null;
  examStart: boolean = true;

  constructor(private examService: ExamService, private router: Router) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem("roleName");
    if (this.role !== 'ROLE_ADMIN') {
      this.examService.getExam().subscribe(exam => {

        if (exam.finish) {
          this.router.navigate(['enteredUser'])
        }

      }, error => {
        if (error.status === 400) {
          this.examStart = false;
        }
      })
    }
  }


}
