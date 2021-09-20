import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getAllSports(): Observable<any> {
    return this.http.get(`http://localhost:4000/sports/getAllSports`);
  }

  addSport(sportName) {
    const data = {
      sportName: sportName,
    };

    return this.http.post(`http://localhost:4000/sports/addSport`, data);
  }

  addDiscipline(sportName, disciplineName, type, min, max):any {
    const data = {

      sportName: sportName,
      disciplineName: disciplineName,
      type: type,
      min: min,
      max: max,
    };


    console.log(data);
    return this.http.post(`${this.uri}/sports/addDiscipline`, data);
  }
}
