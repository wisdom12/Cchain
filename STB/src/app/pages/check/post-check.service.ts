import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Check } from '../../services/factory/check';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostCheckService {
  readonly ADD_CHECK_URL = 'http://vps177348.vps.ovh.ca:3002/api/org.acme.biznet.Check';

  constructor(private http: Http) { }
  createCheck(body: Object): Observable<Check[]> {
    let bodyString = JSON.stringify(body); 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ADD_CHECK_URL, body, options)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
  }
}
