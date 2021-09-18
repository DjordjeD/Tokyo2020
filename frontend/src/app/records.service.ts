import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllRecords():Observable<any> {
    return this.http.get(`http://localhost:4000/records/getRecords`);
  }

}
