import { Component, OnInit } from '@angular/core';
import { PlaceService } from "../../services/place/place.service";
import { Place } from "../../interfaces/place";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    places!: Place[];
    inError: boolean = false;

    constructor(private placeService: PlaceService){
        this.placeService.getAll().subscribe({
            next: places => {
                this.places = places;
            },
            error: () => {
                this.inError = true;
            }
        });
    }

    ngOnInit(): void {
    }
}
