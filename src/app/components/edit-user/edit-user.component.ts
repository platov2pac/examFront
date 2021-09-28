import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {User} from "../../dto/user";
import {Role} from "../../dto/role";
import {Faculty} from "../../dto/faculty";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  professor!: User | null;
  faculties: Faculty[] = [];
  selectedFaculty!: Faculty;

  constructor(private formBuilder: FormBuilder,
              private ref: DynamicDialogRef,
              private conf: DynamicDialogConfig,
              private userService: UserService
  ) {
    this.editForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      faculty: ['', Validators.required]
    })
    this.faculties = [
      {id: 1, name: "Math"},
      {id: 2, name: "History"},
      {id: 3, name: "Biology"},
      {id: 4, name: "Law"},

    ]
  }

  submit(professor: User) {

    if (this.professor != null) {
      console.log("q")
      this.userService.updateProfessor(professor, this.professor.login).subscribe(() => {
        this.ref.close();
      })
    } else {
      console.log("s")
      this.userService.addProfessor(professor).subscribe(() => {
        this.ref.close()
      })
    }
  }

  ngOnInit(): void {
    this.professor = this.conf.data;
    if (this.professor != null) {
      this.editForm.controls['login'].setValue(this.professor.login);
      this.editForm.controls['fullName'].setValue(this.professor.fullName);
      this.editForm.controls['faculty'].setValue(this.professor.faculty);
    }
  }

}
