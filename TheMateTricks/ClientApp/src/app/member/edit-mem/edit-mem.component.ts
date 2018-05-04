
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-mem',
  templateUrl: './edit-mem.component.html',
  styleUrls: ['./edit-mem.component.css']
})
export class EditMemComponent implements OnInit {
  constructor(private AuthService: AuthService,  private UserService: UserService, private Router: Router) { }

  member: any = {};
  updates = {};
  id = JSON.parse(localStorage.getItem("user")).id;
  loggedIn = false;

  //test = localStorage.getItem('token');
  ngOnInit() {
    
    if (!this.AuthService.isExpired()) {
      this.loggedIn = true;
      this.getUser(this.id);
    } else {
      this.loggedIn = false;
      setTimeout(() => {
        this.Router.navigate(['/home']);

      }, 5000);
    }
  }

  updateUser() {

    this.updates = { introduction: this.member.introduction, lookingFor: this.member.lookingFor, interests: this.member.interests, city: this.member.city };
    this.UserService.UpdateUser(this.id, this.updates).subscribe();
  }

  getUser(id) {
    this.UserService.RetrieveUser(id).subscribe(data => this.member = data);
  }
}
