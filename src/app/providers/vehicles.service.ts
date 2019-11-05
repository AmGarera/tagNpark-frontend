import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

addVehicle(body) {
  return this.http.post(`${this.baseURL}api/vehicle/add-vehicle`, body);
}

}
