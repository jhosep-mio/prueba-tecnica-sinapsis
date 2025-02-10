import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component' // Asegúrate de importar el componente Home
import { AuthGuard } from '../../auth.guard'
import { RegisterCampaignsComponent } from './home/register-campaigns/register-campaigns.component'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'campaigns/register', component: RegisterCampaignsComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
