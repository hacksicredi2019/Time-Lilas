import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  protected UrlService: string = "http://172.22.238.232/api/poaonrails/"
   
  protected extractData(response: any) {
      return response.data || {};
  }

  protected ObterHeaderJson(){
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
  }

  protected serviceError(error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
        errMsg = `${error.status} - ${error.statusText || ''}`;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    return throwError(error);
  }
}
