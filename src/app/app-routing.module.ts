import { HerosComponent } from './components/home/heros/heros.component';
import { ContacUsComponent } from './components/contac-us/contac-us.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from './components/home/hero/hero.component';

const routes: Routes = [
  { path: '', loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule) },
  //{ path: '/contac-us', loadChildren:()=>import('./components/contac-us/contac-us.component').then(m=>m.ContacUsComponent) },
  { path: 'contact', component: ContacUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
