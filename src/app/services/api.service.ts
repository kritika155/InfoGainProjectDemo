import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import mockdata from '../Mock Data/mockdata.json';
import data from '../../assets/json/data.json';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  jsonDataResult: any;
  data!: any[];
  // data: any = mockdata.data;
  constructor(private http: HttpClient) {}
  getData() {
    this.data = data.data;
    console.log('From json:', data.data);
    return this.data;
  }
}
