import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch (input, select) {
    console.log('getSearch() is called')
    console.log(input, select);
    return this.http.get(`https://swapi.co/api/${select}/?search=${input}`)
  }

}