import { Component, OnInit } from '@angular/core';
import { PlaceService } from "../../services/place/place.service";
import { Place } from "../../interfaces/place";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    places: Place[];

    constructor(private placeService: PlaceService){
        this.places = this.placeService.getAll();
    }

    ngOnInit(): void {
    }
}
