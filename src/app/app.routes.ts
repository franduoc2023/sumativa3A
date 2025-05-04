import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.component').then(m => m.RegistroComponent)
  },
  {
    path: 'recuperacion',
    loadComponent: () => import('./recuperacion/recuperacion.component').then(m => m.RecuperacionComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'panel',
    loadComponent: () => import('./panel/panel.component').then(m => m.PanelComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },


  {
    path: 'foro',
    loadComponent: () => import('./foro/foro.component').then(m => m.ForoComponent)
  },


  {
    path: 'foro/post',
    loadComponent: () => import('./post/post.component').then(m => m.PostComponent)
  }
  
];
