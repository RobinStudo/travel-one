import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { PlaceService } from "../../services/place/place.service";
import { Place } from "../../interfaces/place";

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
    place: Place|undefined;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private placeService: PlaceService
    ) {
        const id = parseInt(this.route.snapshot.params['id']);
        this.place = this.placeService.get(id);

        if(!this.place){
            this.router.navigate(['/404']);
        }
    }


    ngOnInit(): void {
    }
}
