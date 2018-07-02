
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { CheckInBank } from '../../../services/factory/checkinbank';


@Component({
  selector: 'ngx-notifications',
  styleUrls: ['./inbank.component.scss'],
  templateUrl: './inbank.component.html',
})
export class InbankComponent {
  public allcheckinbank:  Observable<CheckInBank[]> ;
    constructor(private dataService : RestClientService ) {}

    ngOnInit() {
       this.allcheckinbank = this.dataService.getAllCheckInBank();
    }

}
