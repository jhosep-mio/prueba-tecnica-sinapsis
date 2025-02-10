import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Si no está autenticado, redirigir al login
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/'])
      return false
    }

    return new Observable<boolean>((observer) => {
      this.authService.getProfile().subscribe({
        next: (profile) => {
          observer.next(true) // El perfil es válido, permite el acceso a la ruta
        },
        error: (error) => {
          console.error('Error al obtener el perfil', error)
          this.router.navigate(['/']) // Redirigir a login si hay error
          observer.next(false)
        }
      })
    })
  }
}
