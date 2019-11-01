import { AuthService } from './../providers/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  status: any;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn()
      .subscribe(arg => this.status = arg);
    
  }
    logout() {
      this.authService.logout();
    }


}
