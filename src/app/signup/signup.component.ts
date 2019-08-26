import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {
    user: {
      first_name: '',
      last_name: '',
      email: '',
      contact: '',
      password:'',
      password_confirmation:''
    }
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.userService.createUser(this.model).subscribe((data: any) => {
      console.log(data);
      if (data.status == "success") {
        this.router.navigate(['login'])
      } else {

      }
    }, (err) => {
    });
  }

}
