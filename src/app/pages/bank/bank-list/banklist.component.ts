import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Bank } from '../../../services/factory/bank';
import { RestClientService } from '../../../services/rest-client.service';

@Component({
  selector: 'ngx-ckeditor',
  templateUrl: `./banklist.component.html`,
})
export class banklistComponent {
  public allBanks:  Observable<Bank[]> ;
  constructor(private dataService : RestClientService ) {
  }

  ngOnInit() {
     this.allBanks = this.dataService.getAllBanks();
  }

  getTransactionsByBank(id) {
    console.log("id===",id);
  }
}

