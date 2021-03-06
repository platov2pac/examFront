import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exam} from "../response/exam";
import {Answer} from "../response/answer";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  getExam(): Observable<Exam> {
    return this.http.get<Exam>("http://localhost:8080/getExam");
  }

  getAnswerForStudent(): Observable<Answer> {
    return this.http.get<Answer>("http://localhost:8080/student/getAnswer");
  }

  setAnswer(answer: string): Observable<any> {
    const body = {
      "answer": answer
    }
    return this.http.post<any>("http://localhost:8080/student/setAnswer", body);
  }

  getAnswerById(id: number): Observable<Answer> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Answer>("http://localhost:8080/professor/getAnswer", {params});
  }

  setGrade(userId: number, grade: number) {
    const body = {
      "userId": userId,
      "grade": grade
    }
    return this.http.post("http://localhost:8080/professor/setGrade", body);
  }

  finishExam() {
    // @ts-ignore
    return this.http.post("http://localhost:8080/professor/finishExam");
  }

  getAllExam():Observable<Exam[]>{
    return this.http.get<Exam[]>("http://localhost:8080/admin/getExam");
  }
  constructor(private http: HttpClient) {
  }
}
