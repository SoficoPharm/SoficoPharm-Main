import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'partners',
    loadComponent: () => import('./pages/partners/partners').then(m => m.PartnersComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent)
  },
  {
    path: 'order-now',
    loadComponent: () => import('./pages/order-now/order-now').then(m => m.OrderNowComponent)
  },
  {
    path: 'export',
    loadComponent: () => import('./pages/export/export').then(m => m.ExportComponent)
  },
  {
    path: 'brands',
    loadComponent: () => import('./pages/our-brands/our-brands').then(m => m.BrandsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];