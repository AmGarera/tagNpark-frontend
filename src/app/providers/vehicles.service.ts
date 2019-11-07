import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseURL = environment.base_url;
  constructor(private http: HttpClient) { }


  loadAllManufacturers() {
  return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
  }

  loadAllModels(make) {
  return this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
  }

  addVehicle(body) {
    return this.http.post(`${this.baseURL}/api/vehicle/add`, body);
  }

  getVehicles() {
    return this.http.get(`${this.baseURL}/api/vehicle/all`);
  }
}
