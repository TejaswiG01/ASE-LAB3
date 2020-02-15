import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NutrinixService {
  appId = '850e6dad';
  apiKey = 'd07be754c0c5a3133f49da180af1e7f3';
  url1: string;



  constructor(private http: HttpClient) {
    this.url1 = 'https://api.nutritionix.com/v1_1/search/';

  }
  getFood(food: string) {
    return this.http.get(this.url1 + food + '?results=0:1&fields=*&appId=' + this.appId + '&appKey=' + this.apiKey);
  }


}


