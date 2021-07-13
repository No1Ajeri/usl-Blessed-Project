//ConfigService.ts is needed to functionalize the API URL into the http client.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Code below are used in API GET, POST, DELETE, PUT operations depending on which one you wanna use.

export class ConfigService {

  url: string = 'https://usl2021.herokuapp.com'; //API JSON data webLink
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.url + '/users'); //Major operation to get data from the API
  }
  createAllUsers(user: User) {
    return this.http.post<User>(this.url + '/user', user);

  }

  updateAllUsers(user: User) {
    return this.http.put<User>(this.url + '/user', user);
  }

  delete(id: number) {
    // return this.http.delete<any>(`${this.url}/${id}`)
    return this.http.delete<any>(this.url + '/user/' + id);

  }



}



