import { Injectable } from '@angular/core';
import { enviroment } from '../../../../enviroment';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private MODULE_NAME = "user";
  private API_URL = `${enviroment.apiUrl}${this.MODULE_NAME}`;
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