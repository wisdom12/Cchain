import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { AllcheckComponent } from './all-check/allcheck.component';
import { InbankComponent } from './in-bank/inbank.component';
import { IntransitComponent } from './in-transit/intransit.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
  {
    path: 'all-check',
    component: AllcheckComponent,
  }, {
    path: 'in-bank',
    component: InbankComponent,
  },{
    path: 'in-transit',
    component: IntransitComponent,
  },



  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [
  ComponentsComponent,
  AllcheckComponent,
  InbankComponent,
  IntransitComponent,
];
