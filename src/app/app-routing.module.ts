import { HerosComponent } from './components/home/heros/heros.component';
import { ContacUsComponent } from './components/contac-us/contac-us.component';
import { ContainerHomeComponent } from './components/home/container-home/container-home.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from './components/home/hero/hero.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
