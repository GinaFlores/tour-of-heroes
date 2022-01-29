import { CarruselComponent } from './carrousel.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
  ],
  imports: [
    CarouselModule,
    CommonModule,
  ],
  exports: [
    CarouselModule,
  ]
})
export class CarrouselModule{}
