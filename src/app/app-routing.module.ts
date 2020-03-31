import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Role} from './_models/role';
import {AuthGuard} from './_guards';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'scenario-create',
    canActivate: [AuthGuard], data: {roles: [Role.Admin]},
    loadChildren: () => import('./admin/scenario-create/scenario-create.module').then( m => m.ScenarioCreatePageModule)
  },
  {
    path: 'lists-door',
    canActivate: [AuthGuard], data: { roles: [Role.User]},
    loadChildren: () => import('./user/lists-door/lists-door.module').then( m => m.ListsDoorPageModule)
  },
  {
    path: 'network-out',
    loadChildren: () => import('./main/network-out/network-out.module').then( m => m.NetworkOutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
