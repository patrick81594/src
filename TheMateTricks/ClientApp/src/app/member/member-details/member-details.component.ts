import { Component, OnInit,Input } from '@angular/core';
import { UserDTO } from '../../Models/UserDTO';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  constructor(public UserService: UserService, public activatedRoute: ActivatedRoute, public auth: AuthService, public router: Router) { }
  member;
  id = -1;
  loggedIn = false;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getUser(this.id);
  }
  getUser(id) {
    this.UserService.RetrieveUser(id).subscribe(data => this.member = data);
  }
}
