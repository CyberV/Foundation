import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitePageComponent } from './site-page/site-page.component';

const routes: Routes = [
  {
    path: 'page/:page-name', component: SitePageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
