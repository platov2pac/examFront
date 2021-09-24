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

  constructor() {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem("roleName");
  }


}
