import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
