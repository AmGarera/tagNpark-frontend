import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VehiclesService } from '../providers/vehicles.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {
  form: FormGroup;
  makes: any;
  models: any;
  selectedModel: any;


  constructor(private formBuilder: FormBuilder, private vehicleService: VehiclesService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      vehicleNickname: '',
      vehicleYear: '',
      vehicleMake: '',
      vehicleModel: '',
      vehiclePlate: '',
  });

    this.vehicleService.loadAllManufacturers().subscribe(data => {
    this.makes = data['Results'];
  });
}
  loadModels(make) {
    console.log(make);
    console.log(make.detail.value);
    this.vehicleService.loadAllModels(make.detail.value).subscribe(data => {
      this.models = data['Results'];
    });
  }

  submit(f) {
    console.log(f);
    // this.vehicleService.addVehicle(f);
    let vehicle;

    vehicle = {
      nickname: f.value.vehicleNickname,
      year: f.value.vehicleYear,
      make: f.value.vehicleMake,
      model: f.value.vehicleModel,
      license_plate: f.value.vehiclePlate
    };

    this.vehicleService.addVehicle(vehicle).subscribe(data => { console.log(data);});

    this.form.reset();
  }
}
