import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { Observable, of, throwError } from 'rxjs'
import { AuthService } from './auth/services/auth.service'

describe('AuthGuard', () => {
  let authGuard: AuthGuard
  let authService: AuthService
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { isAuthenticated: () => true, getProfile: () => of({}) } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })

    authGuard = TestBed.inject(AuthGuard) // Instanciamos el AuthGuard
    authService = TestBed.inject(AuthService) // Inyectamos el servicio AuthService
    router = TestBed.inject(Router) // Inyectamos el servicio Router
  })

  it('should be created', () => {
    expect(authGuard).toBeTruthy() // Verificamos que el guard haya sido creado
  })

  it('should allow activation if authenticated and profile is valid', (done) => {
    spyOn(authService, 'getProfile').and.returnValue(of({})) // Simulamos que el perfil es válido

    const result = authGuard.canActivate({} as any, {} as any) // Llamamos al guard

    if (result instanceof Observable) {
      result.subscribe((canActivate) => {
        expect(canActivate).toBe(true) // El acceso debe ser permitido
        done() // Termina la prueba cuando termine la suscripción
      })
    } else {
      expect(result).toBe(true) // Si es un booleano directo, verificamos el valor
      done()
    }
  })

  it('should redirect to login if not authenticated', (done) => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false) // Simulamos que el usuario no está autenticado

    const result = authGuard.canActivate({} as any, {} as any) // Llamamos al guard

    if (result instanceof Observable) {
      result.subscribe((canActivate) => {
        expect(canActivate).toBe(false) // El acceso debe ser denegado
        expect(router.navigate).toHaveBeenCalledWith(['/']) // Debe redirigir al login
        done() // Termina la prueba cuando termine la suscripción
      })
    } else {
      expect(result).toBe(false) // Si es un booleano directo, verificamos el valor
      expect(router.navigate).toHaveBeenCalledWith(['/'])
      done()
    }
  })

  it('should redirect to login if profile is invalid', (done) => {
    spyOn(authService, 'getProfile').and.returnValue(throwError('Error al obtener perfil')) // Simulamos un error al obtener el perfil

    const result = authGuard.canActivate({} as any, {} as any) // Llamamos al guard

    if (result instanceof Observable) {
      result.subscribe((canActivate) => {
        expect(canActivate).toBe(false) // El acceso debe ser denegado
        expect(router.navigate).toHaveBeenCalledWith(['/']) // Debe redirigir al login
        done() // Termina la prueba cuando termine la suscripción
      })
    } else {
      expect(result).toBe(false) // Si es un booleano directo, verificamos el valor
      expect(router.navigate).toHaveBeenCalledWith(['/'])
      done()
    }
  })
})
