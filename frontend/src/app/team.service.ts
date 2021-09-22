import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllTeams():any {
    
    return this.http.get(`http://localhost:4000/teams/getAllTeams`);
  }

  addTeam(team:Team):any {
    return this.http.post(`http://localhost:4000/teams/addTeam`,team);
  }

  updateTeam(team:Team):any {
    return this.http.post(`http://localhost:4000/teams/updateTeam`,team);
  }


}
