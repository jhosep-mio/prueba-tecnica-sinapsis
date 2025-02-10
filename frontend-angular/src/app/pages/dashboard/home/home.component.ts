import { Component } from '@angular/core';
import { ListCampaignsComponent } from './list-campaigns/list-campaigns.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ListCampaignsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
