import { HerosModule } from './../heros/heros.module';
import { HerosComponent } from './../heros/heros.component';
import { HeaderComponent } from '../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContacUsComponent } from '../../contac-us/contac-us.component';
import { FiltroComponent } from '../filtro/filtro.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    ContacUsComponent,
    HomeComponent,
    FiltroComponent,
    HeaderComponent,
    HerosComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselConfig,
    FormsModule,
    HerosModule,
  ],
})
export class HomeModule { }
