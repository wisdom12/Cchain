import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { ErrorContract } from "../../../services/factory/errorcontract";

@Component({
  selector: 'ngx-search-map',
  templateUrl: './errorcontract.component.html',
})
export class errorcontractComponent {
  public allContractError:  Observable<ErrorContract[]> ;
    constructor(private dataService : RestClientService ) {}

    ngOnInit() {
       this.allContractError = this.dataService.getAllContractError();
    }
}
