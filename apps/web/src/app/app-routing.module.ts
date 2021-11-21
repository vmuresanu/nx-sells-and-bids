import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  /*{
    path: 'tabs',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },*/
  {
    path: 'login',
    loadChildren: () => import('../../apps/login/src/app/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('../../apps/register/src/app/register.module').then((m) => m.RegisterModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
