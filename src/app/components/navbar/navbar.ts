import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  menuOpen = signal(false);

  navLinks = [
    { label: 'Home',         path: '/',          exact: true },
    { label: 'About Us',     path: '/about',     exact: false },
    { label: 'Our Partners', path: '/partners',  exact: false },
    { label: 'Services',     path: '/services',  exact: false },
    // { label: 'Order Now',    path: '/order-now', exact: false },
    // { label: 'Export',       path: '/export',    exact: false },
    { label: 'Our Brands',   path: '/brands',    exact: false },
    { label: 'Contact Us',   path: '/contact',   exact: false },
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}