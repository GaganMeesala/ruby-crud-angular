import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {

  };

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.userService.loginUser(this.model).subscribe((data: any) => {
      if (data.status == "success") {
        localStorage.setItem("currentuser", JSON.stringify(data));
        this.router.navigate(['dashboard']);
      }
    });
  }

}
