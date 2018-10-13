import { Injectable } from '@angular/core';
import {ICampaign} from "./campaign";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _campaign:ICampaign;


  get campaign(): ICampaign {
    return this._campaign;
  }

  set campaign(value: ICampaign) {
    this._campaign = value;
  }

  constructor(){}

}