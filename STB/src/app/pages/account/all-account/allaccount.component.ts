import { Component } from '@angular/core';
import { Compte } from '../../../services/factory/compte';
import { RestClientService } from '../../../services/rest-client.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'ngx-d3',
  styleUrls: ['./allaccount.component.scss'],
  templateUrl: './allaccount.component.html',
})
export class AllaccountComponent {

  public allComptes: Observable<Compte[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
    this.allComptes = this.dataService.getAllComptes();
  }

}
