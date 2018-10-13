import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICampaign } from './campaign' ;
import { Observable } from 'rxjs/internal/Observable';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  private _url : string = "https://demo2653115.mockable.io/campaigns" ;

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<ICampaign[]>{
    return this.http.get<ICampaign[]>(this._url);
  }

}
