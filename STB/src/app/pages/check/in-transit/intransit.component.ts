
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { CheckInTransit } from '../../../services/factory/checkintransit';


@Component({
  selector: 'ngx-intransit',
  templateUrl: './intransit.component.html',
})
export class IntransitComponent {

  public allcheckintransit:  Observable<CheckInTransit[]> ;
    constructor(private dataService : RestClientService ) {}
  
    ngOnInit() {
       this.allcheckintransit = this.dataService.getAllCheckIntransit();
    }

}
