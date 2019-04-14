import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CarService } from './services/car.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ],
    providers:
        [AuthService, CarService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtInterceptor,
                multi: true
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: ErrorInterceptor,
                multi: true
            }
        ]
})
export class CoreModule {

}