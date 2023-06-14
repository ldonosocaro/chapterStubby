import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserList(): Observable<any> {
    const url = "/bff/v1/project-bff/client/list";
    return this.httpClient.get(url);
  }

}
