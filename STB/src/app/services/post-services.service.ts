import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TransactionDepart } from './factory/transactiondeparture';
import 'rxjs/Rx';
import { TransactionArrived } from './factory/transactionarrived';

@Injectable()
export class PostServicesService {
  readonly ALL_CheckMvtDepart_URL = 'http://vps177348.vps.ovh.ca:3002/api/org.acme.biznet.CheckMvtDepart ';
  readonly ALL_CheckMvtArrived_URL = '';


  constructor(private http: Http ) {}


  createTransactionDeparture(body: Object): Observable<TransactionDepart[]> {
    let bodyString = JSON.stringify(body); 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ALL_CheckMvtDepart_URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
  }

  
  createTransactionArrived(body: Object): Observable<TransactionArrived[]> {
    let bodyString = JSON.stringify(body); 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ALL_CheckMvtArrived_URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
  }


}
