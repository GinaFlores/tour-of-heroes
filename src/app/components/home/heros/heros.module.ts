import { HeroComponent } from './../hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HerosModule { }
