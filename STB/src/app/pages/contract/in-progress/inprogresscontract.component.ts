
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { InProgCont } from "../../../services/factory/inprogressContract";


@Component({
  selector: 'ngx-bubble-map',
  styleUrls: ['./inprogresscontract.component.scss'],
  templateUrl: './inprogresscontract.component.html',
})
export class InprogresscontractComponent {
  public allContractsinprogress:  Observable<InProgCont[]> ;
  constructor(private dataService : RestClientService ) {}

  ngOnInit() {
     this.allContractsinprogress = this.dataService.getAllContractInProgress();
  }
}
