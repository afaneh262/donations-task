import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignpageComponent } from './campaignpage.component';

describe('CampaignpageComponent', () => {
  let component: CampaignpageComponent;
  let fixture: ComponentFixture<CampaignpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
