import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { ListbankComponent } from './bank-list/listbank.component';

const routes: Routes = [{
  path: '',
  component: EditorsComponent,
  children: [{
    path: 'bank-list',
    component: ListbankComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  EditorsComponent,
  ListbankComponent,
];
