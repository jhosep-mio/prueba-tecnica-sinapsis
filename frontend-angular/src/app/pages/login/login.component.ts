import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular'
import axios from 'axios'
import { environment } from '../../../environments/environment'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '../../auth/services/auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup
  eyeIcon = Eye
  eyeOffIcon = EyeOff
  showPassword = false
  loading = false

  constructor(public toastr: ToastrService, private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.minLength(3), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/sistema'])
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword
  }

  showAlert(): void {
    this.toastr.warning('No disponible')
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      this.toastr.warning('Complete todos los campos', 'Advertencia')
      return
    }
    this.loading = true

    const datos = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    try {
      const response: any = await axios.post<{ status: boolean; message?: string }>(
        `${environment.apiUrl}/users/login`,
        datos,
        { withCredentials: true } // Para enviar cookies si es necesario
      )

      if (response.data.status) {
        this.toastr.success('Usuario identificado correctamente', 'Éxito')
        const token = response.data.token
        localStorage.setItem('token', token)
        window.location.reload()
      } else {
        this.toastr.error(response.data.message || 'Error desconocido', 'Error')
      }
    } catch (error: any) {
      let errorMessage = 'El usuario no existe'

      if (error.response?.data?.message) {
        switch (error.response.data.message) {
          case 'Complete todos los campos':
            errorMessage = 'Complete todos los campos'
            this.toastr.warning(errorMessage, 'Advertencia')
            break
          case 'Contraseña incorrecta':
            errorMessage = 'Contraseña incorrecta'
            this.toastr.warning(errorMessage, 'Advertencia')
            break
          default:
            this.toastr.error(errorMessage, 'Error')
        }
      } else {
        this.toastr.error(errorMessage, 'Error')
      }
    } finally {
      this.loading = false
    }
  }
}
