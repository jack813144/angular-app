import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private MODULE_PATH = "/user";
  private API_URL = `${environment.apiUrl}${this.MODULE_PATH}`;
  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL); 
  }
  saveUser(request: User): Observable<User> {
    return this.http.post<User>(this.API_URL, request); 
  }
  deleteUserById(id: string): Observable<User[]> {
    return this.http.delete<User[]>(`${this.API_URL}/${id}`); 
  }
}