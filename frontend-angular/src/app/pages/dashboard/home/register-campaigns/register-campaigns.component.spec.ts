import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCampaignsComponent } from './register-campaigns.component';

describe('RegisterCampaignsComponent', () => {
  let component: RegisterCampaignsComponent;
  let fixture: ComponentFixture<RegisterCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCampaignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
