import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllTeams():any {
    
    return this.http.get(`http://localhost:4000/teams/getAllTeams`);
  }

}
