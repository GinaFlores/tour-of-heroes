import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrousel/carrousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HomeRouteModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { CarrouselModule } from './carrousel/carrousel.module';
import { CaracteriesComponent } from './caracteries/caracteries.component';

@NgModule({
    declarations: [
        HomeComponent,
        //ContainerHomeComponent,
        HeaderComponent,
        CarruselComponent,
        FooterComponent,
        CaracteriesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRouteModule,
        FontAwesomeModule,
        CarrouselModule
    ]
})
export class HomeModule{}
