import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../dto/user";
import {SelectItem} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {EditUserComponent} from "../../edit-user/edit-user.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DialogService]

})
export class AdminComponent implements OnInit {

  professors: User[] = [];

  constructor(private userService: UserService, private dynamicDialog: DialogService) {
  }

  delete() {
  }

  update(professor: User | null) {
    this.dynamicDialog.open(EditUserComponent, {
      header: 'Редактирование(добавление) препода ',
      width: '70%',
      contentStyle: {"max-height": "50vh", "overflow": "auto"},
      baseZIndex: 10000,
      data: professor
    }).onClose.subscribe(() => {
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.userService.getProfessors().subscribe(professors => {
      this.professors = professors;
    })
  }

}
