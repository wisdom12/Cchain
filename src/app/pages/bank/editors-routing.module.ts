import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorsComponent } from './editors.component';
import {banklistComponent} from './bank-list/banklist.component';

const routes: Routes = [{
  path: '',
  component: EditorsComponent,
  children: [{
    path: 'bank-list',
    component: banklistComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  EditorsComponent,
  banklistComponent,
];
