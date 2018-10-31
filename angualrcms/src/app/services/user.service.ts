import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }
  register(user) {
    return this.http.post('http://localhost:8080/users/register', user)
        .map(res => res.json());
  }

  login(user) {
    return this.http.post('http://localhost:8080/users/login', user)
        .map(res => res.json());
  }
}
