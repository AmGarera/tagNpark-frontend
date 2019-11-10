import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  {
    path: 'signup',
    loadChildren: './auth/signup/signup.module#SignupPageModule'
  },
  {
    path: 'add-new-vehicle',
    component: VehicleAddComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
