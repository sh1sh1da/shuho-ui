import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];
  loading = true;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }
}
