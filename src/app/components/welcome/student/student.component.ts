import {Component, OnInit} from '@angular/core';
import {ExamService} from "../../../services/exam.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  role!: string | null;
  examQuestion!: string;
  questionAnswered: boolean = false;
  answer!: string;
  loading = [false, false, false, false];

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

  sendQuestion() {
    this.examService.setAnswer(this.answer).subscribe();
    this.router.navigate(['enteredUser'])
  }

  constructor(
    private examService: ExamService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem("roleName");
    this.examService.getExam().subscribe(exam => {
      this.examQuestion = exam.question;
      this.examService.getAnswerForStudent().subscribe(answer => {
          this.questionAnswered = answer.answered
          if (answer.answered) {
            this.router.navigate(['enteredUser'])
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.questionAnswered = false;
          }
        }
      )

    })
  }

}
