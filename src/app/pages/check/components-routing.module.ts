//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';

import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import {allcheckComponent} from './all-check/allcheck.component';
import {inbankComponent} from './in-bank/inbank.component';
import { IntransitComponent } from './in-transit/intransit.component';
import {NgModule} from "@angular/core";

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
  {
    path: 'all-check',
    component: allcheckComponent,
  }, {
    path: 'in-bank',
    component: inbankComponent,
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
  allcheckComponent,
  inbankComponent,
  IntransitComponent,
];
