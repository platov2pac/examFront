import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: string | null = '';
  descOfFirstButton: string = '';
  descOfSecondButton: string = '';

  constructor(private router: Router) {
  }

  clickFirst() {
    if (this.role === 'ROLE_PROFESSOR') {
      this.router.navigate(['welcome'])
    }
    if (this.role === 'ROLE_ADMIN') {
    }
  }

  clickSecond() {
    if (this.role === 'ROLE_PROFESSOR') {
      this.router.navigate(['enteredUser'])
    }
    if (this.role === 'ROLE_ADMIN') {
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('roleName');
    if (this.role === 'ROLE_PROFESSOR') {
      this.descOfFirstButton = 'Проверка абитуриентов';
      this.descOfSecondButton = 'Список зачисленных';
    }
    if (this.role === 'ROLE_ADMIN') {
      this.descOfFirstButton = 'Преподаватели';
      this.descOfSecondButton = 'Список экзаменов';
    }
  }

}
