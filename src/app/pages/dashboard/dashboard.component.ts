import { Component } from '@angular/core';
import { color } from 'd3-color';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

/** --------------------------------------------------- charte CONTRACT -------------------------------------------------------- */

 
  public doughnutChartLabels:string[] = ['VALID', 'IN PROGRESS', 'ERROR'];
  public doughnutChartData:number[] = [1, 1, 1];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClickedCONTRACT(e:any):void {
    console.log(e);
  }
 
  public chartHoveredCONTRACT(e:any):void {
    console.log(e);
  }
  
/** --------------------------------------------------- charte CHECK -------------------------------------------------------- */

  public doughnutChartLabelsCHECK:string[] = ['CHECK IN BANK', 'CHECK IN TRANSIT'];
  public doughnutChartDataCHECK:number[] = [1, 1];
  public doughnutChartTypeCHECK:string = 'doughnut';
 
  // events
  public chartClickedCHECK(e:any):void {
    console.log(e);
  }
 
  public chartHoveredCHECK(e:any):void {
    console.log(e);
  }


/** --------------------------------------------------- charte BANK -------------------------------------------------------- */


public pieChartLabelsBANK:string[] = ['BIAT', 'STB', 'BNA', 'BTE', 'ATB'];
public pieChartDataBANK:number[] = [2, 1, 1, 1, 1];
public pieChartTypeBANK:string = 'pie';

// events
public chartClickedBANK(e:any):void {
}

public chartHoveredBANK(e:any):void {
}

}
/** --------------------------------------------------- //charte 3 -------------------------------------------------------- */
