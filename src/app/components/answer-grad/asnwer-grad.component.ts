import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import {User} from "../../dto/user";
import {Answer} from "../../response/answer";
import {ExamService} from "../../services/exam.service";


@Component({
  selector: 'app-asnwer-grad',
  templateUrl: './asnwer-grad.component.html',
  styleUrls: ['./asnwer-grad.component.css']
})
export class AsnwerGradComponent implements OnInit {
  student: User | any;
  answer: Answer | any;
  question: string | any;
  grade: number = 1;

  constructor(private ref: DynamicDialogRef, private conf: DynamicDialogConfig, private examService: ExamService) {

  }

  setGrade(userId: number, grade: number) {
    this.examService.setGrade(userId, grade).subscribe(() => {
        this.ref.close();
      }
    )

  }

  ngOnInit(): void {
    this.student = this.conf.data;
    this.examService.getExam().subscribe((exam) => {
      this.question = exam.question;
    })
    this.examService.getAnswerById(this.student.id).subscribe((answer) => {
      this.answer = answer;
    })
  }

}
