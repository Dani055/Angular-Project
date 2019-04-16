import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        RegisterComponent,
        LoginComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports:[
        RegisterComponent,
        LoginComponent,
    ]
})
export class AuthenticationModule{

}