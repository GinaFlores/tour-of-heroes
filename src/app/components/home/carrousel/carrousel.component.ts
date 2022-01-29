import { Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'carrusel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarruselComponent implements OnInit{
  myInterval = 1500;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] = [
    {image: '../../../../assets/carrusel/carrusel6.jpg'},
    {image: '../../../../assets/carrusel/carrusel.jpg'},
    {image: '../../../../assets/carrusel/carrusel2.jpg'},
    {image: '../../../../assets/carrusel/carrusel3.jpg'},
  ];
  ngOnInit() {
  }
}
