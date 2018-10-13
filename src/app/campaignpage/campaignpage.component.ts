import { Component,Input, OnInit } from '@angular/core';
import {CampaignsService} from "../campaigns.service";
import {SessionService} from "../session.service";
import {ICampaign} from "../campaign";
import {Router} from "@angular/router";

@Component({
  selector: 'app-campaignpage',
  templateUrl: './campaignpage.component.html',
  styleUrls: ['./campaignpage.component.scss']
})
export class CampaignpageComponent implements OnInit {

  @Input() campaign: ICampaign;
  constructor(private campaignService:CampaignsService,private sessionService:SessionService,private router:Router) { }

  ngOnInit() {
    this.campaign = this.sessionService.campaign;
  }

}
