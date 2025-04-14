import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'panel', component: PanelComponent},
  { path: 'recuperacion', component: RecuperacionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];