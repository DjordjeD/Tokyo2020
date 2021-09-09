import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllCountries():Observable<any> {
    return this.http.get(`${this.uri}/countries/getAllCountries`);
  }
}
