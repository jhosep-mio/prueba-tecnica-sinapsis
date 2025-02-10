import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AuthService } from '../../../../auth/services/auth.service'
import { Auth } from '../../../../models/auth.model'
import { Router } from '@angular/router'
import { ChevronDown, LucideAngularModule, LogOut } from 'lucide-angular'

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  date: Date | null = null
  showMenu = false
  private interval: any
  auth: Auth | null = null
  ChevronDown = ChevronDown
  LogOut = LogOut

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.auth$.subscribe({
      next: (authData: Auth | null) => {
        this.auth = authData
      },
      error: () => {
        this.auth = null
      }
    })

    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)

    this.date = new Date()
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
