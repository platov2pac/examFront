import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponse} from "../response/loginResponse";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../dto/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authUser(login: string, password: string): Observable<LoginResponse> {
    const authRequest = {
      "login": login,
      "password": password
    }
    return this.http.post<LoginResponse>("http://localhost:8080/login", authRequest);
  }

  getEnteredUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/getEnteredUsers");
  }

  getAnsweredUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/professor/answeredList");
  }

  getNotAnsweredUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/professor/notAnsweredList")
  }

  getProfessors(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/admin/getProfessors")
  }

  addProfessor(professor: User) {
    return this.http.post("http://localhost:8080/admin/addProfessor", professor);
  }

  updateProfessor(professor: User, oldLogin: string) {
    const params = new HttpParams().set(
      "oldLogin", oldLogin
    )
   return  this.http.post("http://localhost:8080/admin/updateUser", professor, {params});
  }

  constructor(private http: HttpClient) {
  }
}
