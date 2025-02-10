import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import axios from 'axios'
import { LucideAngularModule, Eye } from 'lucide-angular'
import { ToastrService } from 'ngx-toastr'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup
  showPassword: boolean = false
  loading: boolean = false
  eyeIcon = Eye
  eyeOffIcon = Eye
  constructor(public toastr: ToastrService, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  async onSubmit(): Promise<void> {
    if (this.registerForm.invalid) {
      this.toastr.warning('Complete todos los campos', 'Advertencia')
      this.registerForm.markAllAsTouched()
      return
    }

    this.loading = true

    const datos = {
      name: this.registerForm.value.name,
      username: this.registerForm.value.username
    }

    try {
      const response = await axios.post<{ status: boolean; message?: string }>(
        `${environment.apiUrl}/users/register`,
        datos,
        { withCredentials: true } // Para manejar cookies si es necesario
      )

      if (response.data.status) {
        this.toastr.success('Cuenta creada exitosamente', 'Éxito')
        this.router.navigate(['/login']) // Redirige al login
      } else {
        this.toastr.error(response.data.message || 'Error desconocido', 'Error')
      }
    } catch (error: any) {
      let errorMessage = 'No se pudo crear la cuenta'

      if (error.response?.data?.message) {
        switch (error.response.data.message) {
          case 'Complete todos los campos':
            errorMessage = 'Complete todos los campos'
            this.toastr.warning(errorMessage, 'Advertencia')
            break
          case 'El usuario ya existe':
            errorMessage = 'El usuario ya existe'
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

  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
