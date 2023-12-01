import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import data from '../../assets/json/data.json';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  jsonDataResult: any;
  data!: Array<any>;
  // data: any = mockdata.data;
  constructor(private http: HttpClient) {}
  getData() {
    // this.data = data.data;
    // console.log('From json:', data.data);
    // return this.data;
    return this.http
      .get('../../assets/json/data.json')
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
