import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://api.covid19api.com/";

  getData(url) {
    return this.http.get(`${this.apiUrl}` + url);
  }
}
