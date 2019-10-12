import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceApi } from '../interfaces/iapi';


const ApiRootUrl = 'http://localhost:3000';    //
const ApiPath = '/api/favorite';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchFavoriteItems(): Observable<any> {
    return this.http.get(`${ApiRootUrl}${ApiPath}`);
  }

  fetchFavoriteItem(id: string): Observable<any> {
    return this.http.get(`${ApiRootUrl}${ApiPath}/${id}`);
  }

  postFavoriteItem(postData: InterfaceApi): Observable<any> {
    const body = postData as InterfaceApi;
    return this.http.post(`${ApiRootUrl}${ApiPath}`, body);
  }

  deleteFavoriteItem(id: string): Observable<any> {
    return this.http.delete(`${ApiRootUrl}${ApiPath}/${id}`);
  }

}
