import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  model: any = {
    user: {
      first_name: '',
      last_name: '',
      email: '',
      contact: ''
    }
  };
  postDataForm: boolean = false;
  update_user: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data['users_data'];
    }, (err) => {

    });

    //  promise
    // this.userService.getUsers().toPromise().then((data)=>{

    // },(err)=>{

    // });
  }



  postUser() {
    this.postDataForm = true;
    this.update_user = false;

  }

  createUser() {
    this.userService.createUser(this.model).subscribe((data: any) => {
      if (data.status == "success") {
        this.getUsers();
        this.model = {
          user: {
            first_name: '',
            last_name: '',
            email: '',
            contact: ''
          }
        }
        this.postDataForm = false;
      } else {

      }
    }, (err) => {
    });
  }

  editUser(user) {
    this.update_user = true;
    this.model.user = user
    this.postDataForm = true;
  }

  updateUser(){
    this.userService.updateUser(this.model).subscribe((data: any) => {
      if (data.status == "success") {
        this.getUsers();
        this.model = {
          user: {
            first_name: '',
            last_name: '',
            email: '',
            contact: ''
          }
        }
        this.update_user = false;
        this.postDataForm = false;
      } else {

      }
    }, (err) => {
    });
  }

  cancel(action){
   if(action == true){
    this.update_user = false;
    this.postDataForm = false;
   }else{
    this.postDataForm = false;
   }
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe((data: any) => {
      if (data.status == "success") {
        this.getUsers();
      } else {

      }
    }, (err) => {
    });
  }
}
