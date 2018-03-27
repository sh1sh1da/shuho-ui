import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shuho';
  users: User[];
  authorized: boolean = false; // TODO: 確認用。削除するよ

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  authorize(value: any) {
    this.userService.authorize(value).subscribe(responseBody => {
      console.log(responseBody);
      if (responseBody.authorized) {
        this.authorized = true;
      }
    });
  }
}
