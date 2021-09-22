import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllCompetitors():any {
   // console.log('getAllCompetitors front ')
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

  getCompetitorsByDiscipline(disciplineName):any
  {
    const data = {
 
      disciplineName: disciplineName,
    
    }

    return this.http.post(`http://localhost:4000/competitors/getCompetitorsByDiscipline`,data);
  }

  addCompetitor(competitor)
  {
    return this.http.post(`http://localhost:4000/competitors/addCompetitor`,competitor)
  }


}
