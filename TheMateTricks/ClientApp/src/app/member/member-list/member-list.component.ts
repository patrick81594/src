import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserDTO } from '../../models/UserDTO';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private UserService: UserService, private auth: AuthService, private router: Router) { }
  users = [];

  ngOnInit() {
    
    this.getUsers;
    console.log(this.users);

  }
  getUsers() {
    this.UserService.RetrieveUsers().subscribe(p => this.users = p, err => console.log(err), () => console.log(this.users));
    console.log(this.users);
  }

}
