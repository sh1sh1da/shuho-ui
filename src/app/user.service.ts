import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  usersUrl = "https://shuho-api.herokuapp.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const USERS: User[] = [
      new User("user3", 'pass3'),
      new User("user2", 'pass2'),
    ];
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<User[]>(this.usersUrl, httpOptions);
  }

}
