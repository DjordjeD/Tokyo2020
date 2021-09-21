import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournaments } from './models/models';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllTournaments():Observable<any> {
    return this.http.get(`http://localhost:4000/tournaments/getAllTournaments`);
  }
  
  selectDelegate(user: User): Observable<any> {

    return this.http.post(`http://localhost:4000/tournaments/selectDelegate`,user);
  }

  saveTournament(tournament: Tournaments): Observable<any> {
    return this.http.post(`http://localhost:4000/tournaments/saveTournament`,tournament);
  }

  updateTournament(tournament: Tournaments): Observable<any> {
    return this.http.post(`http://localhost:4000/tournaments/updateTournament`,tournament);
  }
}
