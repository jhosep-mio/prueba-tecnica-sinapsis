import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import axios from 'axios'
import { BehaviorSubject, from, Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { Auth } from '../../models/auth.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token'
  private authSubject: BehaviorSubject<any> = new BehaviorSubject<Auth | null>(null)
  public auth$ = this.authSubject.asObservable()

  constructor(private router: Router) {}

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  getProfile(): Observable<any> {
    const token = this.getToken()
    return from(
      axios.get(`${environment.apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    )
  }

  loadProfile(): void {
    if (this.isAuthenticated()) {
      this.getProfile().subscribe({
        next: (data) => {
          this.authSubject.next(data?.data.message)
        },
        error: (err) => {
          console.error('Error al cargar el perfil:', err)
          this.authSubject.next(null)
        }
      })
    } else {
      this.authSubject.next(null)
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken()
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.tokenKey) // Eliminar el token de localStorage
    this.router.navigate(['/']) // Redirigir al inicio o login
  }
}
