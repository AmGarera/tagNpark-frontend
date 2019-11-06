import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


loadAllManufacturers() {
 return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
}

loadAllModels(make) {
 return this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
}

addVehicle(body) {
  return this.http.post(`${this.baseURL}/api/vehicle/add-vehicle`, body);
}

}
