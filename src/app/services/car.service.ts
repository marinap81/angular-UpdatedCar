import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/Car';
//import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://613d68c694dbd600172ab8c6.mockapi.io/';

  constructor(private http: HttpClient) {}
    getCars() 
    {
      return this.http.get<Car[]>(`${this.apiUrl}/cars`);
    }
  }

