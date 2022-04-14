import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from "./pages/list/list.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { DisplayComponent } from "./pages/display/display.component";
import { AddComponent } from "./pages/add/add.component";
import { IsAuthenticatedGuard } from "./guards/is-authenticated.guard";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'display/:id',
        component: DisplayComponent,
    },
    {
        path: 'add',
        component: AddComponent,
        canActivate: [IsAuthenticatedGuard],
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
