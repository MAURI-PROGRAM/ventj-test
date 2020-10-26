import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cookies-policies',
    loadChildren: () => import('./pages/cookies-policies/cookies-policies.module').then( m => m.CookiesPoliciesPageModule)
  },
  {
    path: 'conditions-web-use',
    loadChildren: () => import('./pages/conditions-web-use/conditions-web-use.module').then( m => m.ConditionsWebUsePageModule)
  },
  {
    path: 'general-contracting-conditions',
    loadChildren: () => import('./pages/general-contracting-conditions/general-contracting-conditions.module')
      .then( m => m.GeneralContractingConditionsPageModule)
  },
  {
    path: 'drawer-menu',
    loadChildren: () => import('./pages/drawer-menu/drawer-menu.module').then( m => m.DrawerMenuPageModule)
  },
  {
    path: 'description-product/:id',
    loadChildren: () => import('./pages/description-product/description-product.module').then( m => m.DescriptionProductPageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./pages/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'publications-product',
    loadChildren: () => import('./pages/publications-product/publications-product.module').then( m => m.PublicationsProductPageModule)
  },
  {
    path: 'callback',
    loadChildren: () => import('./pages/callback/callback.module').then( m => m.CallbackPageModule)
  },
  {
    path: '**',
    redirectTo: ''
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
