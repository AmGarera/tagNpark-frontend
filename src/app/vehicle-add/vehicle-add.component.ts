import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VehiclesService } from '../providers/vehicles.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private vehicleService: VehiclesService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({});
  }

  submit(f) {
    this.vehicleService.addVehicle(f);
  }
}
