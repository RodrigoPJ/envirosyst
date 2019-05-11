import {Injectable} from '@angular/core';

import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {Observable, of, throwError, ObservableInput} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

interface User {
  user: String;
  token: String;
}

let admin: User = {
  user: 'admin',
  token: 'secret-jwt',
};

@Injectable({
  providedIn: 'root',
})
export class FakebackendService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let user: User = JSON.parse(localStorage.getItem('users')) || [];

    return (
      of(null)
        .pipe(
          mergeMap(
            (v: any, i: number): ObservableInput<HttpEvent<any>> => {
              // We define what server is needed, either auth or data
              switch (req.url) {
                case '/auth/login':
                  if (
                    req.body.password === 'pass' &&
                    req.body.user === 'admin' &&
                    req.method === 'POST'
                  ) {
                    return of(new HttpResponse({status: 200, body: admin}));
                  } else {
                    return throwError({
                      error: {message: 'Username or password is incorrect'},
                    });
                  }
                  break;
                case '/auth/logout':
                  return of(
                    new HttpResponse({
                      status: 200,
                      body: {message: 'sesion cerrada'},
                    })
                  );
              }

              //  return;
            }
          )
        )
        // add some delay to test loading elements and better feel
        .pipe(materialize())
        .pipe(delay(700))
        .pipe(dematerialize())
    );
  }
}

export let fakeBackeEndProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakebackendService,
  multi: true,
};
