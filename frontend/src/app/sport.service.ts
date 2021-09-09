import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllSports():Observable<any> {
    return this.http.get(`http://localhost:4000/sports/getAllSports`);
  }
}
