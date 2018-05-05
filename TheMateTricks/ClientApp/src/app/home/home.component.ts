import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public AuthService: AuthService, public UserService: UserService, public Router: Router) { }
  member: any = {};
  id = JSON.parse(localStorage.getItem("user")).id;
  
  loggedIn = false;
  ngOnInit() {
    console.log(this.id);
    if (!this.AuthService.isExpired()) {
      this.loggedIn = true;
      this.getUser(this.id);
      console.log(this.id);
    } else {
      this.loggedIn = false;
      setTimeout(() => {
        this.Router.navigate(['home']);

      }, 5000);
    }
  }
  getUser(id) {
    this.UserService.RetrieveUser(id).subscribe(data => this.member = data);
  }
}
