import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';
import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './components/authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    CoreModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
