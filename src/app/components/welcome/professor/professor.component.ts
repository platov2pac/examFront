import {Component, OnInit} from '@angular/core';
import {User} from "../../../dto/user";
import {UserService} from "../../../services/user.service";
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AsnwerGradComponent} from "../../asnwer-grad/asnwer-grad.component";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  providers:[DialogService]
})
export class ProfessorComponent implements OnInit {

  users: User[] = [];
  selectedUser!: User;
  loading = [false, false, false, false];

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

  constructor(private userService: UserService, private dynamicDialog: DialogService) {
  }

  getUserAnswer() {
    this.dynamicDialog.open(AsnwerGradComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });
  }

  ngOnInit(): void {
    this.userService.getAnsweredUsers().subscribe(users =>
      this.users = users)
  }

}
