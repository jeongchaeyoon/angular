import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './common/page-not-found.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [

  { path: '', redirectTo: '/menu-admin', pathMatch: 'full' },
  { path: 'menu-admin', component: MenusComponent},
  { path: 'menu-admin/list', component: MenusComponent},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }