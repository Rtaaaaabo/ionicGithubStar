import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const apiRootUrl = 'https://api.github.com/search/repositories';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  fetchItemsGithub(query: string) {
    let httpParams = new HttpParams();
    let httpHeaders = new HttpHeaders();
    console.log(query);
    httpParams = httpParams.append('q', query);
    httpParams = httpParams.append('sort', 'stars');
    httpParams = httpParams.append('order', 'desc');
    httpHeaders = httpHeaders.append('Accept', 'application/vnd.github.mercy-preview+json');
    const options = {
      headers: httpHeaders,
      params: httpParams,
    };
    return this.http.get(apiRootUrl, options);
  }
}
