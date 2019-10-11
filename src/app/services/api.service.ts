import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiRootUrl = '';    //

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  postfavorite(): Observable<any> {
    const body = {};      // JSONファイルで渡す
    return this.http.post(apiRootUrl, body);
  }
}
