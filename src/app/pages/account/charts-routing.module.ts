import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { allaccountComponent } from './all-account/allaccount.Component'


const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'all-account',
    component: allaccountComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  allaccountComponent,
];
