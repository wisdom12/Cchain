import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps.component';
import { AllcontractComponent } from './all-contract/allcontract.component';
import { ValidcontractComponent } from './valid/validcontract.component';
import { InprogresscontractComponent } from './in-progress/inprogresscontract.component';
import { ErrorcontractComponent } from './error/errorcontract.component';

const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [{
    path: 'all-contract',
    component: AllcontractComponent,
  }, {
    path: 'valid',
    component: ValidcontractComponent,
  }, {
    path: 'in-progress',
    component: InprogresscontractComponent,
  }, {
    path: 'error',
    component: ErrorcontractComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  AllcontractComponent,
  ValidcontractComponent,
  InprogresscontractComponent,
  ErrorcontractComponent,
];
