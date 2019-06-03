
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { ValidContract } from '../../../services/factory/validContract';


@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./validcontract.component.scss'],
  templateUrl: './validcontract.component.html',
})
export class ValidcontractComponent {
  public allCpntractValid:  Observable<ValidContract[]> ;
    constructor(private dataService : RestClientService ) {}

    ngOnInit() {
       this.allCpntractValid = this.dataService.getAllContractValid();
    }

}
