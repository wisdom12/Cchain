import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps.component';
import {allcontractComponent} from './all-contract/allcontract.component';
import {validcontractComponent} from './valid/validContract.component';
import {inprogresscontractComponent} from './in-progress/inprogresscontract.component';
import {errorcontractComponent} from './error/errorcontract.component';

const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [{
    path: 'all-contract',
    component: allcontractComponent,
  }, {
    path: 'valid',
    component: validcontractComponent,
  }, {
    path: 'in-progress',
    component: inprogresscontractComponent,
  }, {
    path: 'error',
    component: errorcontractComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  validcontractComponent,
  inprogresscontractComponent,
  errorcontractComponent,
  allcontractComponent,

];
