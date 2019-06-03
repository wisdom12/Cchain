import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TeamComponent } from './descreption-project-c-chain/team.component';
import { KittenComponent } from './redlean/kitten.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    ThemeModule,
    ChartsModule,
 
  ],
  declarations: [
    DashboardComponent,
    RoomSelectorComponent,
    TeamComponent,
    KittenComponent,

    ],
})
export class DashboardModule { }
