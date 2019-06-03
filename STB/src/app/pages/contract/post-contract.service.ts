import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Contract } from '../../services/factory/contract';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostContractService {
  readonly ADD_CONTRACT_URL = 'http://vps177348.vps.ovh.ca:3002/api/org.acme.biznet.Contract';

  constructor(private http: Http) { }
  createContract(body: Object): Observable<Contract[]> {
    let bodyString = JSON.stringify(body); 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ADD_CONTRACT_URL, body, options)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
  }
}
