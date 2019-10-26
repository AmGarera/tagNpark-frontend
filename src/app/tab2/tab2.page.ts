import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, icon } from 'leaflet';
import * as watermark from 'watermarkjs';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('waterMarkedImage', { static: false }) waterMarkImage: ElementRef;


  plat: any;
  takenPicture: string;
  loadingLocation: boolean;
  locationCoordinates: any;
  blobImage: Blob;

  constructor(public platform: Platform, private camera: Camera, private geolocation: Geolocation, private http: HttpClient) {
    this.getLatLong();
    console.log(this.platform.platforms());
    this.plat = this.platform.platforms();
  }


  getLatLong() {
    this.loadingLocation = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.locationCoordinates = resp.coords;
      this.loadingLocation = false;
    }).catch((error) => {
      this.loadingLocation = false;
      console.log('Error getting location', error);
    });
  }
/**
 * Clears Picture taken in Tab 2
 *
 * @memberof Tab2Page
 */
clearPicture() {
  this.takenPicture = '';
}
/**
 * Takes Picture by bringing the Native camera for each OS.
 *
 * @memberof Tab2Page
 */
takePicture() {
  console.log('Picture Taken');

  const options: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    correctOrientation: true
  };

  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   const base64Image = 'data:image/jpeg;base64,' + imageData;
   this.takenPicture = base64Image;

   fetch(this.takenPicture)
   .then(res => res.blob())
   .then(blob => {
     this.blobImage = blob;
     this.watermarkImage();
   });
  }, (err) => {
   // Handle error
  });
}

watermarkImage() {
  watermark([this.blobImage])
  .image(watermark.text.lowerLeft(
    '(' + this.locationCoordinates.latitude + ', ' + this.locationCoordinates.longitude + ')', '170px Arial', '#F5A905', 0.8
    ))
    .then(img => {
      this.waterMarkImage.nativeElement.src = img.src;
    });
}
}
