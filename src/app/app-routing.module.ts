import { NgModule } from "@angular/core";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'SignUp', component: SignupComponent},
    {path: 'Login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}