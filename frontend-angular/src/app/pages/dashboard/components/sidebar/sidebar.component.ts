import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { LucideAngularModule, Radio, Cylinder, X, Menu, LogOut } from 'lucide-angular'
import { Auth } from '../../../../models/auth.model'
import { AuthService } from '../../../../auth/services/auth.service'
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  auth: Auth | null = null
  loading = true
  showMenu = false
  IconRadio = Radio
  LogOut = LogOut
  X = X
  Menu = Menu
  Wifi = Cylinder

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loadProfile() // Cargar perfil
    this.authService.auth$.subscribe({
      next: (authData: Auth) => {
        this.auth = authData // Almacenar los datos
        this.loading = false
      },
      error: () => {
        this.auth = null
        this.loading = false
      }
    })
  }

  logout() {
    this.authService.logout() // Llama al servicio de autenticación para cerrar sesión
    this.router.navigate(['/']) // Redirige al login o página inicial
  }
}
