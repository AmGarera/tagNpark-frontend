import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Camera } from "@ionic-native/camera/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { AuthService } from "./providers/auth.service";
import { AuthModule } from "./auth/auth.module";
import { VehicleAddComponent } from "./vehicle-add/vehicle-add.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, VehicleAddComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SafariViewController,
    Camera,
    Geolocation,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
