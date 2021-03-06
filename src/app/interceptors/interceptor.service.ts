import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     const headers = new HttpHeaders({
      'token-usuarrio': 'AUDHUDUE6635345432',
    });

    const reqClone = req.clone({
      headers,

    })

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }


  manejarError(error: HttpErrorResponse) {
    console.log('succedió un error');
    console.warn(error);

    return throwError('Error personalizado');
  }
}
