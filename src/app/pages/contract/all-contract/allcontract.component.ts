
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { Contract } from "../../../services/factory/contract";


@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./allcontract.component.scss'],
  templateUrl: './allcontract.component.html',
})
export class allcontractComponent {

  public allContracts:  Observable<Contract[]> ;
  constructor(private dataService : RestClientService ) {}

  ngOnInit() {
     this.allContracts = this.dataService.getAllContracts();
  }
}
