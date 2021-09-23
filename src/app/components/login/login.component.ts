import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  login!: string;
  password!: string;
  loading = [false, false, false, false];
  message!: string;

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

  constructor(private userService: UserService, private messageService: MessageService, private router: Router) {
  }

  sendAuth() {
    this.userService.authUser(this.login, this.password)
      .subscribe((resp) => {
          localStorage.setItem("token", resp.token)
          localStorage.setItem("login", resp.login)
          localStorage.setItem("roleName", resp.roleName)
          this.router.navigate(['welcome']);
        },
        (err: HttpErrorResponse) => {
          this.message = err.error.message;
          this.error = true;
          this.password = '';
        })

  }

  ngOnInit(): void {
  }

}
