import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { AllaccountComponent } from './all-account/allaccount.component';


const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'all-account',
    component: AllaccountComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  AllaccountComponent,
];
