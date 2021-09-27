import {Component, OnInit} from '@angular/core';
import {User} from "../../../dto/user";
import {UserService} from "../../../services/user.service";
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AsnwerGradComponent} from "../../answer-grad/asnwer-grad.component";
import {ExamService} from "../../../services/exam.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  providers: [DialogService]
})
export class ProfessorComponent implements OnInit {

  users: User[] = [];
  notAnsweredUsers: User[] = [];
  selectedUser!: User;
  loading = [false, false, false, false];

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

  constructor(
    private userService: UserService,
    private examService: ExamService,
    private dynamicDialog: DialogService,
    private router: Router) {
  }

  getUserAnswer() {
    this.dynamicDialog.open(AsnwerGradComponent, {
      header: 'Оцените студента ' + this.selectedUser.fullName,
      width: '70%',
      contentStyle: {"max-height": "50vh", "overflow": "auto"},
      baseZIndex: 10000,
      data: this.selectedUser
    }).onClose.subscribe(() => window.location.reload()
    )
  }

  finishExam() {
    this.examService.finishExam().subscribe(() =>
      this.router.navigate(['enteredUser'])
    );
  }

  onInit() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.userService.getAnsweredUsers().subscribe(users =>
      this.users = users)
    this.userService.getNotAnsweredUsers().subscribe(users =>
      this.notAnsweredUsers = users)
  }

}
