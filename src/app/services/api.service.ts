import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import mockdata from '../Mock Data/mockdata.json';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  jsonDataResult: any;
  data!: any[];
  // data: any = mockdata.data;
  constructor(private http: HttpClient) {}
  getStudents() {
    this.data = mockdata.data;
    return this.data;
    // return this.http.get<[]>('assets/json/data.json');
    // console.log('--- result :: ', this.data);
    // return this.data;
  }
}
