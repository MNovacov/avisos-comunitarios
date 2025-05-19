import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then(m => m.ListPage)
  },
  {
    path: 'form',
    loadComponent: () => import('./pages/form/form.page').then(m => m.FormPage)
  },
];

export const appRouterProviders = [provideRouter(routes)];
