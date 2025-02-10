import { provideRouter } from '@angular/router'
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { ToastrModule } from 'ngx-toastr'
import { provideAnimations } from '@angular/platform-browser/animations' // ✅ Agregar animaciones
import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(ToastrModule.forRoot()),
    provideAnimations(),
    provideHttpClient() // ✅ Habilita HttpClient
  ]
}
