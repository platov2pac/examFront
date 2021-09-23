import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponse} from "../response/loginResponse";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authUser(login: string, password: string): Observable<LoginResponse> {
    const authRequest = {
      "login":login,
      "password":password
    }

    return this.http.post<LoginResponse>("http://localhost:8080/login", authRequest);

  }

  constructor(private http: HttpClient) {
  }
}
