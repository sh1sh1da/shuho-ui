import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(value: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = `{"id": "${value.id}", "password": "${value.password}"}`;
    return this.http.post(environment.apiEndpoint + 'session', body, httpOptions);
  }

}
