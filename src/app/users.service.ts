import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class UsersService {

  usersUrl = environment.apiEndpoint + 'users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const USERS: User[] = [
      new User("user3", 'pass3'),
      new User("user2", 'pass2'),
    ];
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    };
    return this.http.get<User[]>(this.usersUrl, httpOptions);
  }

}
