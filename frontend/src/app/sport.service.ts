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

  addDiscipline(sportName,disciplineName,type,min,max) {

    const data = {
      sportName: sportName,
      disciplineName: disciplineName,
      type: type,
      min: min,
      max: max
    }

    return this.http.post(`http://localhost:4000/sports/addDiscipline`,data);


  }
}
