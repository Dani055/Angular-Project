import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(tap((success) => {
            if(success instanceof HttpResponse){
                if(success.url.includes('myrents')){
                    return;
                }
                if(success.url.includes('rent') || success.url.includes('unrent') || success.url.includes('edit') || success.url.includes('delete') || success.url.includes('create')|| success.url.includes('signin')|| success.url.includes('signup')){
                    this.toastr.success(success.body.message)
                }
              }
        }),
        catchError((err: HttpErrorResponse) => {
            if(err.status === 401){
                this.toastr.error(err.error.message)
            }
            if(err.status === 422){
                for(let entry of err.error.errors){
                   this.toastr.error(entry.msg) 
                }
            }
			if(err.status === 403){
                this.toastr.error(err.error.message)
            }
            if(err.status === 500){
                this.toastr.error(err.error.error)
            }
            return throwError(err)
        })
        )
    }
}