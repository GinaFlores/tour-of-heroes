import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FiltroComponent } from "./filtro/filtro.component";
import { HeaderComponent } from "./header/header.component";
import { HerosComponent } from "./heros/heros.component";
import { HomeRouteModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
        //ContainerHomeComponent,
        HeaderComponent,
        FiltroComponent,
        HerosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRouteModule,
        FontAwesomeModule
    ]
})
export class HomeModule{}
