import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AppLoaderService } from '../services/app-loader.service';

@Injectable()
export class AppLoaderInterceptor implements HttpInterceptor {

  constructor(private service:AppLoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.service.requestStarted();
    // return next.handle(request);
    return this.handler(next,request);
  }
  handler(next: HttpHandler, request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<unknown>) => {
          if (event instanceof HttpResponse) {
            this.service.requestEnded();
            // alert("ended");
          }
        },
        (error: HttpErrorResponse) => {
          this.service.resetSpinner();
          // alert("ended1");
          throw error;
        }
      )
    );
  }
}
