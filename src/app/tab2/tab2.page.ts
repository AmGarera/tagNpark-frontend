import { Component, SecurityContext } from '@angular/core';
import { Platform} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  plat: any;
  takenPicture: any;

  constructor(public platform: Platform, private camera: Camera, private sanitizer: DomSanitizer) {
    console.log(this.platform.platforms());
    this.plat = this.platform.platforms();
  }



takePicture() {
  console.log('I did it!');
  
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   const base64Image = 'data:image/jpeg;base64,' + imageData;
   this.takenPicture = this.sanitizer.bypassSecurityTrustUrl(base64Image);
  }, (err) => {
   // Handle error
  });
}

}
