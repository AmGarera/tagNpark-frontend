import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseURL = '';
  constructor(private http: HttpClient) { }

addVehicle(body) {
  return this.http.post('', body);
}

}
