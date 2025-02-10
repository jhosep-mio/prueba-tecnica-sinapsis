import { Routes } from '@angular/router'
import { AuthGuard } from './auth.guard' // Guard para proteger la ruta
import { LoginComponent } from './pages/login/login.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { RegisterComponent } from './pages/register/register.component'

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'sistema',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) }]
  },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no encontrada al login
]
