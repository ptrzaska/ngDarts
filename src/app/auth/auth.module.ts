import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        MaterialModule,
        FlexLayoutModule,
        FormsModule
    ],
    exports: [
        SignupComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: []
})
export class AuthModule {

}