import { AuthService } from 'src/app/providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  edboolean: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.edboolean = this.authService.loggedIn;
  }
}
