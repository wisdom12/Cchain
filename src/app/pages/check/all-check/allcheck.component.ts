
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { Check } from '../../../services/factory/check';


@Component({
  selector: 'ngx-tree',
  templateUrl: './allcheck.component.html',
})
export class allcheckComponent {

  public allcheck:  Observable<Check[]> ;
    constructor(private dataService : RestClientService ) {}

    ngOnInit() {
       this.allcheck = this.dataService.getAllCheks();
    }

}
