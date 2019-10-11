import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceApi } from '../interfaces/iapi';


const ApiRootUrl = 'http://localhost:3000';    //
const ApiPath = '/api/favorite';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postfavorite(postData: InterfaceApi): Observable<any> {
    const body = postData as InterfaceApi;      // JSONファイルで渡す
    return this.http.post(ApiRootUrl, body);
  }
}
