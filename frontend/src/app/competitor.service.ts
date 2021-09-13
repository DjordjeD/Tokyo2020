import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllCompetitors():Observable<any> {
    return this.http.get(`http://localhost:4000/competitors/getAllCompetitors`);
  }

  searchCompetitors(name,surname,countryName,sportName,disciplineName,sex,medalWinner):Observable<any> {

    const data = {
      name: name,
      surname: surname,
      countryName: countryName,
      sportName: sportName,
      disciplineName: disciplineName,
      sex: sex,
      medalwinner: medalWinner
    }

    return this.http.post(`http://localhost:4000/competitors/searchCompetitors`,data);
  }

}
