import { User } from './user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url ='';

  constructor(private_http: HttpClient) { }
  enroll(url: User){
    return this._http.post<any>(this._url, User)

  }
}
