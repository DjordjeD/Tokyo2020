import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllTournaments():Observable<any> {
    return this.http.get(`http://localhost:4000/tournaments/getAllTournaments`);
  }

}
