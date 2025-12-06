import { Component } from '@angular/core';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NavLogoComponent, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
