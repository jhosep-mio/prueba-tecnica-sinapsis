import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { ChangeDetectorRef } from '@angular/core'
import Swal from 'sweetalert2'
import axios from 'axios'
import { environment } from '../../../../../environments/environment'
import { Auth } from '../../../../models/auth.model'
import { AuthService } from '../../../../auth/services/auth.service'

@Component({
  selector: 'app-register-campaigns',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-campaigns.component.html',
  styleUrl: './register-campaigns.component.css'
})
export class RegisterCampaignsComponent {
  auth: Auth | null = null
  campaignForm: FormGroup
  loading = false
  newPhoneNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^\+51\d{9}$/)])

  constructor(private authService: AuthService, public toastr: ToastrService, private router: Router, private cdr: ChangeDetectorRef) {
    this.campaignForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      messageText: new FormControl('', [Validators.required]),
      phoneList: new FormArray([])
    })
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe({
      next: (authData: Auth | null) => {
        this.auth = authData
      },
      error: () => {
        this.auth = null
      }
    })
  }

  get phoneList(): FormArray {
    return this.campaignForm.get('phoneList') as FormArray
  }

  getPhoneControl(index: number): FormControl {
    return this.phoneList.at(index) as FormControl
  }

  addPhoneNumber() {
    const number = (this.newPhoneNumberControl.value || '').trim()

    if (number === '') {
      this.toastr.warning('Ingrese un número de teléfono', 'Advertencia')
      return
    }

    if (!/^\+51\d{9}$/.test(number)) {
      this.toastr.error('Número de teléfono inválido. Debe ser +51 seguido de 9 dígitos', 'Error')
      return
    }
    // VERIFICAR NUMEROS DUPLICADOS
    const alreadyExists = this.phoneList.controls.some((control) => control.value === number)
    if (alreadyExists) {
      this.toastr.warning('Este número ya ha sido agregado', 'Advertencia')
      return
    }

    this.phoneList.push(new FormControl(number, [Validators.required]))
    this.newPhoneNumberControl.reset()
  }

  validatePhone(phone: string): boolean {
    return /^(\+?\d{7,15})$/.test(phone)
  }

  validateKeyPress(event: KeyboardEvent) {
    const pattern = /[0-9+]/
    if (!pattern.test(event.key)) {
      event.preventDefault()
    }
  }

  removePhoneNumber(index: number): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Se eliminará el número de teléfono',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.phoneList.removeAt(index)
        this.toastr.success('Número eliminado', 'Éxito')
      }
    })
  }

  async onSubmit(): Promise<void> {
    if (this.campaignForm.invalid) {
      this.toastr.warning('Complete todos los campos', 'Advertencia')
      return
    }

    if (!this.campaignForm.value.phoneList || this.campaignForm.value.phoneList.length === 0) {
      this.toastr.warning('Debe agregar al menos un número de teléfono', 'Advertencia')
      return
    }

    this.loading = true

    const formData = {
      user_id: this.auth?.id,
      message_text: this.campaignForm.value.messageText,
      phone_list: JSON.stringify(this.campaignForm.value.phoneList),
      name: this.campaignForm.value.name
    }

    try {
      const token = localStorage.getItem('token')
      const response = await axios.post<{ status: boolean; message?: string }>(`${environment.apiUrl}/campaigns/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.data.status) {
        this.toastr.success('Campaña creada correctamente', 'Éxito')
        this.router.navigate(['/sistema'])
      } else {
        this.toastr.error(response.data.message || 'Error desconocido', 'Error')
      }
    } catch (error: any) {
      console.log(error)
      let errorMessage = 'Hubo un error al crear la campaña'
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message
      }
      this.toastr.error(errorMessage, 'Error')
    } finally {
      this.loading = false
    }
  }
}
