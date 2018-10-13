import { Component, Input, OnInit } from '@angular/core';
import { CampaignsService } from '../../campaigns.service';
import { SessionService } from "../../session.service";
import { ICampaign } from "../../campaign";
import { Router } from "@angular/router";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  @Input() campaign:ICampaign;

  campaigns:ICampaign[];
  selectedCampaign:ICampaign;

  constructor(private _campaignsservice: CampaignsService,private router:Router,private sessionService:SessionService,) { }

  ngOnInit() {
    this._campaignsservice.getCampaigns().subscribe(data=>this.campaigns = data)
  }

  goToCampaignPage(campaign: ICampaign){
    this.selectedCampaign=campaign;
    this.router.navigate(['/campaigns']);
  }

  toF(x):number{
    return Math.floor(x);
  }

}
