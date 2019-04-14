import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageValidatorDirective } from './directives/image-validator.directive';


@NgModule({
    declarations:[
        NavigationComponent,
        HomeComponent,
        ProfileComponent,
        ImageValidatorDirective,
    ],
    imports:[
        CommonModule,
        RouterModule,
    ],
    exports:[
        NavigationComponent,
        HomeComponent,
        ProfileComponent,
        ImageValidatorDirective,
    ]
})
export class SharedModule{

}