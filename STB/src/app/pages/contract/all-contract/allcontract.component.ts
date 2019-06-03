
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "../../../services/rest-client.service";
import { Observable, of } from 'rxjs';
import { Contract } from "../../../services/factory/contract";
import { PostContractService } from '../post-contract.service';
import { CheckInBank } from '../../../services/factory/checkinbank';


@Component({
  selector: 'ngx-gmaps',
  templateUrl: './allcontract.component.html',
})
export class AllcontractComponent {
  errorMessage: string;
  successMessage: string;
  AddContract = new Contract()


  public allContracts:  Observable<Contract[]> ;
  public allcheckinbank: Observable<CheckInBank[]>;

  constructor (private dataService : RestClientService, private postContractService: PostContractService ) {}

  ngOnInit() {
     this.allContracts = this.dataService.getAllContracts();
     this.allcheckinbank = this.dataService.getAllCheckInBank();
  }


  save() {
    this.successMessage = '';
    this.errorMessage = '';

    console.log(this.AddContract)
    this.postContractService.createContract(this.AddContract)
        .subscribe(AddContract => {
            this.successMessage = 'transactionDepart was created!';
        });
    }







}
