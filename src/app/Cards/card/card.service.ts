import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Magazine } from './magazine.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getAllMagazines(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/magazines`); // Added a forward slash before 'magazines'
  }

  addMagazine(magazine: Magazine): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/magazines`, magazine); // Added a forward slash before 'magazines'
  }

  updateMagazine(magazine: Magazine): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/magazines/${magazine.id}`, magazine); // Added a forward slash before 'magazines'
  }

  deleteMagazine(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/magazines/${id}`); // Added a forward slash before 'magazines'
  }
}
