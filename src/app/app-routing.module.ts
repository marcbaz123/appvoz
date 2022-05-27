import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'restaurar',
    loadChildren: () => import('./restaurar/restaurar.module').then( m => m.RestaurarPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'nego',
    loadChildren: () => import('./nego/nego.module').then( m => m.NegoPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'politicas2',
    loadChildren: () => import('./politicas2/politicas2.module').then( m => m.Politicas2PageModule)
  },
  {
    path: 'portavoz',
    loadChildren: () => import('./portavoz/portavoz.module').then( m => m.PortavozPageModule)
  },
  {
    path: 'regis-portavoz',
    loadChildren: () => import('./regis-portavoz/regis-portavoz.module').then( m => m.RegisPortavozPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
