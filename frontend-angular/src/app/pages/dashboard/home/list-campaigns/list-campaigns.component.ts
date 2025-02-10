import { CommonModule } from '@angular/common'
import { Component, HostListener } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../../../environments/environment'
import { LucideAngularModule, Ellipsis } from 'lucide-angular'
import { ToastrService } from 'ngx-toastr'
import { FormsModule } from '@angular/forms'
import { LoadingComponent } from '../../../../shared/loading/loading.component'
import { Auth } from '../../../../models/auth.model'
import { AuthService } from '../../../../auth/services/auth.service'

@Component({
  selector: 'app-list-campaigns',
  imports: [CommonModule, LucideAngularModule, FormsModule, LoadingComponent],
  templateUrl: './list-campaigns.component.html',
  styleUrl: './list-campaigns.component.css'
})
export class ListCampaignsComponent {
  auth: Auth | null = null
  campaigns: any[] = []
  Ellipsis = Ellipsis
  dropdownOpen: number | null = null
  modalOpen: boolean = false
  sendingCampaign: any = null
  messages: any[] = []
  campaignStatus: string = ''
  startDate: string = ''
  endDate: string = ''
  filterApplied = false
  isFiltered = false
  loading = true
  loadingSendCampaigns = false
  //MESSAGES
  loadingMessages = false
  modalOpenMessage: boolean = false
  messagesArray: any[] = []
  //   PAGINACION
  currentPage: number = 1
  pageSize: number = 5 // Número de campañas por página
  totalPosts: number = 0
  token = localStorage.getItem('token')

  ngOnInit(): void {
    this.authService.loadProfile() // Cargar perfil
    this.authService.auth$.subscribe({
      next: (authData: Auth) => {
        this.auth = authData // Almacenar los datos
        this.getCampaigns(false)
      },
      error: () => {
        this.auth = null
      }
    })
  }

  constructor(public toastr: ToastrService, private authService: AuthService) {}

  // CHANGE FECHAS
  onDateChange(event: Event, type: 'start' | 'end') {
    const value = (event.target as HTMLInputElement).value

    if (type === 'start') {
      if (this.endDate && new Date(value) > new Date(this.endDate)) {
        this.toastr.warning('⚠️ La fecha de inicio no puede ser mayor que la fecha de fin.', 'Advertencia')
        this.startDate = ''
      } else {
        this.startDate = value
      }
    } else {
      if (this.startDate && new Date(this.startDate) > new Date(value)) {
        this.toastr.warning('⚠️ La fecha de fin no puede ser menor que la fecha de inicio.', 'Advertencia')
        this.endDate = ''
      } else {
        this.endDate = value
      }
    }

    this.filterApplied = false
  }

  //   TRAER CAMPAÑAS
  async getCampaigns(applyFilter: boolean = true) {
    try {
      this.loading = true
      let url = `${environment.apiUrl}/campaigns/getCampaignsByDate`
      if (this.startDate && this.endDate) {
        url += `?startDate=${this.startDate}&endDate=${this.endDate}`
      }
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      this.campaigns = data.campaigns
      this.totalPosts = data.campaigns.length
      this.currentPage = 1
      if (applyFilter) {
        this.filterApplied = true
        this.isFiltered = true
        this.toastr.success('🎯 Filtro aplicado correctamente', 'Éxito')
      } else {
        this.filterApplied = false
        this.isFiltered = false
      }
    } catch (error) {
      console.error('Error al obtener las campañas: ', error)
      throw error
    } finally {
      this.loading = false
    }
  }

  getFullDate(campaign: any): Date {
    const fullDateString = `${campaign.process_date}T${campaign.process_hour}`
    return new Date(fullDateString)
  }

  toggleDropdown(campaignId: number) {
    this.dropdownOpen = this.dropdownOpen === campaignId ? null : campaignId
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement
    if (clickedElement.closest('.dropdown-container')) {
      return
    }
    this.dropdownOpen = null
  }

  // ENVIAR CAPAÑAS SIMULADAS
  async sendCampaign(campaignId: number) {
    this.modalOpen = true
    this.loadingSendCampaigns = true
    this.sendingCampaign = this.campaigns.find((c) => c.id === campaignId)
    this.messages = []
    this.campaignStatus = '2'

    try {
      const { data } = await axios.post(
        `${environment.apiUrl}/campaigns/sendCampaign/${campaignId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      if (data.status) {
        await this.trackCampaignProgress(campaignId)
      }
    } catch (error) {
      console.error('Error al enviar la campaña:', error)
      this.campaignStatus = 'error'
    } finally {
      this.loadingSendCampaigns = false
    }
  }

  // SEGUIMIENTO DE PROGESO
  async trackCampaignProgress(campaignId: number) {
    let finished = false
    let attempts = 0
    const maxAttempts = 4

    while (!finished && attempts < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      try {
        const { data: messages } = await axios.get(`${environment.apiUrl}/messages/getMessagesByCampaign/${campaignId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.messages = messages.messages

        await this.getCampaigns(false)
        const campaign = this.campaigns.find((c) => c.id == campaignId)
        this.campaignStatus = campaign?.process_status || 'Desconocido'

        if (campaign?.process_status == 3) {
          finished = true
          this.toastr.success('✅ La campaña ha finalizado correctamente.', 'Éxito')
        }
      } catch (error) {
        console.error('Error obteniendo el estado:', error)
      }
      attempts++
    }
    if (!finished) {
      this.toastr.warning('⚠️ Se alcanzó el límite de intentos sin finalizar la campaña.', 'Advertencia')
    }
  }

  //VER mensajes
  async viewMessages(campaignId: number) {
    this.loadingMessages = true
    this.messagesArray = []
    this.modalOpenMessage = true

    try {
      const { data } = await axios.get(`${environment.apiUrl}/messages/getMessagesByCampaign/${campaignId}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      this.messagesArray = data.messages
    } catch (error) {
      console.error('Error al obtener los mensajes:', error)
      this.toastr.error('No se pudieron obtener los mensajes', 'Error')
    } finally {
      this.loadingMessages = false
      this.dropdownOpen = null
    }
  }

  // Obtener campañas paginadas
  getPaginatedCampaigns(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize
    const endIndex = startIndex + this.pageSize
    return this.campaigns.slice(startIndex, endIndex)
  }

  // Calcular total de páginas
  totalPages(): number {
    return Math.ceil(this.campaigns.length / this.pageSize)
  }

  closeModal() {
    this.modalOpen = false
  }

  closeModalMessages() {
    this.modalOpenMessage = false
  }
}
