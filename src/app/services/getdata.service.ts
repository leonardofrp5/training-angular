import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(environment.URL_GET_DATA);
  }
}
