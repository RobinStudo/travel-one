import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from "./pages/list/list.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'list',
        component: ListComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
