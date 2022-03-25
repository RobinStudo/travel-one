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
    place!: Place;
    inError: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private placeService: PlaceService
    ) {
        const id = parseInt(this.route.snapshot.params['id']);
        this.placeService.get(id).subscribe({
            next: place => this.place = place,
            error: err => {
                if(err.status === 404){
                    this.router.navigate(['/404']);
                }else{
                    this.inError = true;
                }
            },
        });
    }


    ngOnInit(): void {
    }
}
