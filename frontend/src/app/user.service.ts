import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  login(username, password, type):Observable<any> {
    const data = {
      username: username,
      password: password,
      type: type
    }

    return this.http.post(`http://localhost:4000/users/login`, data);
  }

  register(username, password, type, nationality,name,surname,email,isDelegate):any{
    const data = {
      username: username,
      password: password,
      type: type,
      nationality: nationality,
      name: name,
      surname: surname,
      email: email,
      isDelegate:isDelegate
    }

    return this.http.post(`${this.uri}/users/register`, data);
  }

  changePassword(username, password, newPassword) :any {
    const data = {
      username: username,
      password: password,
      newPassword: newPassword
    }

    return this.http.post(`${this.uri}/users/changePassword`, data);
  }

  getUser(username, password):any{
    const data = {
      username: username,
      password: password,
    }

    return this.http.post(`${this.uri}/users/getUser`, data);
  }

  getDelegates():any{


    return this.http.get(`${this.uri}/users/getDelegates`);
  }

  getAllUserRequests():any{


    return this.http.get(`${this.uri}/users/getAllUserRequests`);
  }


  
  acceptUser(user):any{

    return this.http.post(`${this.uri}/users/acceptUser`,user);
  }
}
