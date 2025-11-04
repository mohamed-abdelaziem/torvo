import { Routes } from '@angular/router';

// main routes
export const routes: Routes = [
  {
    path: 'ar',
    loadComponent: () =>
      import('./components/ar-layout/app-ar/app-ar').then((file) => file.AppAr),
  },
  {
    path: '',
    redirectTo: '/en',
    pathMatch: 'full',
  },
  {
    path: 'en',
    loadComponent: () =>
      import('./components/en-layout/app-en/app-en').then((file) => file.AppEn),
  },
];
