import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private baseUrl = 'http://localhost:3000/api'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  // Method to send data to the backend (POST)
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, userData);
  }

  // Method to fetch data from the backend (GET)
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }
}
