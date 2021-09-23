import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token')
    if (token !== null) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
    } else {
      this.router.navigate(['login'])
    }
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.router.navigate(['login'])
          localStorage.clear();
        }
        return throwError(err);
      })
    );
  }
}
