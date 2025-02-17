import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightData } from '../models/flydata.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:44355/';

  constructor(private http: HttpClient) {}

  getTrainsOfers(flightData: FlightData): Observable<any> {
    return this.http.post(`${this.baseUrl}api/flightData`, flightData);
  }
}
