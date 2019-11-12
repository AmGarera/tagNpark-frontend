import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../providers/vehicles.service";

@Component({
  selector: "app-vehicle-dashboard",
  templateUrl: "./vehicle-dashboard.component.html",
  styleUrls: ["./vehicle-dashboard.component.scss"]
})
export class VehicleDashboardComponent implements OnInit {
  getVehicles: any;
  constructor(private vehicles: VehiclesService) {}

  ngOnInit() {
    this.vehicles.getVehicles().subscribe(data => {
       this.getVehicles = data;
    });
  }
}
