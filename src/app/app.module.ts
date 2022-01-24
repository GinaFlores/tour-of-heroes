import { HerosComponent } from './components/home/heros/heros.component';
import { FiltroComponent } from './components/home/filtro/filtro.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ContainerHomeComponent } from './components/home/container-home/container-home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const NgxBootstrapModule = [
  NgbModule,
];
@NgModule({
  declarations: [
    AppComponent,
    ContainerHomeComponent,
    HeaderComponent,
    FiltroComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
