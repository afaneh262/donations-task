import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { CampaignpageComponent } from './campaignpage/campaignpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { CampaignComponent } from './homepage/campaign/campaign.component';
import { BgVideoComponent } from './homepage/bg-video/bg-video.component';
import { HttpClientModule } from '@angular/common/http';
import { CampaignsService } from './campaigns.service';
import { HomepageNavbarComponent } from './homepage/homepage-navbar/homepage-navbar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CampaignpageComponent,
    HomepageComponent,
    FooterComponent,
    CampaignComponent,
    BgVideoComponent,
    HomepageNavbarComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CampaignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
