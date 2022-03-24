import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

const modules: any[] = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...modules,
    ],
    exports: [
        ...modules,
    ]
})
export class MaterialModule { }
