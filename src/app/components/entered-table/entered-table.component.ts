import {Component, OnInit} from '@angular/core';
import {User} from "../../dto/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-entered-table',
  templateUrl: './entered-table.component.html',
  styleUrls: ['./entered-table.component.css']
})
export class EnteredTableComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getEnteredUsers().subscribe(
      (users) =>{
       this.users = users;
      }
    )

  }

}
