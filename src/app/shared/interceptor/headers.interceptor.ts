import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

export const BYPASS_LOG = new HttpContextToken(() => false);

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.context.get(BYPASS_LOG) === true)
      return next.handle(request).pipe(
        catchError((error) => {
          console.log('error is intercept')
          console.error(error);
          return throwError(() => error)
        }));


    const API_KEY = 'test123';
    console.log(request);
    const req = request.clone({
      setHeaders: {
        API_KEY
      }
    });
    return next.handle(req).pipe(
      catchError((error) => {
        console.log('error is intercept')
        console.error(error);
        return throwError(() => error)
      }));;
  }
}
