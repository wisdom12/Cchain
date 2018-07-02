
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { Check } from '../../../services/factory/check';
import { PostCheckService } from '../post-check.service';


@Component({
  selector: 'ngx-tree',
  templateUrl: './allcheck.component.html',
})
export class AllcheckComponent {

  errorMessage: string;
  successMessage: string;
  AddCheck = new Check()

    public allcheck:  Observable<Check[]> ;
    constructor(private dataService : RestClientService, private postCheckService: PostCheckService ) {}

    ngOnInit() {
       this.allcheck = this.dataService.getAllCheks();
    }


    Getlist()

    {

      this.allcheck = this.dataService.getAllCheks();

    }

    save() {
      this.successMessage = '';
      this.errorMessage = '';

      console.log(this.AddCheck)
      this.postCheckService.createCheck(this.AddCheck)
          .subscribe(AddCheck => {
              this.successMessage = 'transactionDepart was created!';

              this.Getlist();
          });




}
}
