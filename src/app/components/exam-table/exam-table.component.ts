import {Component, OnInit} from '@angular/core';
import {Exam} from "../../response/exam";
import {SelectItem} from "primeng/api";
import {User} from "../../dto/user";
import {ExamService} from "../../services/exam.service";

@Component({
  selector: 'app-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrls: ['./exam-table.component.css']

})
export class ExamTableComponent implements OnInit {
  exams: Exam[] = [];
  clonedExam: { [s: string]: Exam; } = {};

  constructor(private examService: ExamService) {

  }


  ngOnInit(): void {
    this.examService.getAllExam().subscribe(exams => {
      this.exams = exams;
    })

  }

  displayFaculty(idFaculty: number) {
    if (idFaculty === 1) {
      return 'Math'
    }
    if (idFaculty === 2) {
      return 'History'
    }
    if (idFaculty === 3) {
      return 'Biology'
    }
    if (idFaculty === 4) {
      return 'Law'
    }
    return null
  }

  onRowEditInit(exam: Exam) {
    this.clonedExam[exam.id] = {...exam};
  }

  onRowEditSave(exam: Exam) {
    // console.log(this.clonedExam[exam.id].login)
    // console.log(exam.login)
  }

  onRowEditCancel(exam: Exam, index: number) {
    this.exams[index] = this.clonedExam[exam.id];
    delete this.clonedExam[exam.id];
  }
}
