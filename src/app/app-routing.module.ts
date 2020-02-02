import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'basic-info',
    loadChildren: () => import('./setup/basic-info/basic-info.module').then( m => m.BasicInfoPageModule)
  },
  {
    path: 'savings-prefs',
    loadChildren: () => import('./setup/savings-prefs/savings-prefs.module').then( m => m.SavingsPrefsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./setup/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'home-info',
    loadChildren: () => import('./setup/home-info/home-info.module').then( m => m.HomeInfoPageModule)
  },
  {
    path: 'optimizing',
    loadChildren: () => import('./setup/optimizing/optimizing.module').then( m => m.OptimizingPageModule)
  },
  {
    path: 'done',
    loadChildren: () => import('./setup/done/done.module').then( m => m.DonePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
