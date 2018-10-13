import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CampaignpageComponent } from './campaignpage/campaignpage.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  {
    path:'home',
    component:HomepageComponent,
  },
  {
    path:'campaigns',
    component:CampaignpageComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }