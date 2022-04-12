import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from "./modules/material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DisplayComponent } from './pages/display/display.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { VisualCategoryPipe } from './pipes/visual-category.pipe';
import { AddComponent } from './pages/add/add.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ListComponent,
        HomeComponent,
        NotFoundComponent,
        DisplayComponent,
        LoaderComponent,
        ErrorComponent,
        VisualCategoryPipe,
        AddComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
