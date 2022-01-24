import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbPaginationModule,
    NgbAlertModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
