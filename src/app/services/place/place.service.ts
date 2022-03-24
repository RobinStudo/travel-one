import {Injectable} from '@angular/core';
import {Place, PlaceCategory} from "../../interfaces/place";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
    private places: Place[] = [
        {
            name: 'Paris',
            picture: 'https://bit.ly/36DcJol',
            price: 250,
            category: PlaceCategory.city,
        },
        {
            name: 'Berlin',
            picture: 'https://bit.ly/3wzysby',
            price: 200,
            category: PlaceCategory.city,
        },
        {
            name: 'Annecy',
            picture: 'https://bit.ly/37N2sGE',
            price: 150,
            category: PlaceCategory.mountain,
        },
        {
            name: 'Bali',
            picture: 'https://bit.ly/3JGK9kK',
            price: 1500,
            category: PlaceCategory.sea,
        },
        {
            name: 'Alpes',
            picture: 'https://bit.ly/36kz5eH',
            price: 620,
            category: PlaceCategory.mountain,
        },
        {
            name: 'Côte d\'Azur',
            picture: 'https://bit.ly/3Nmxd5Q',
            price: 800,
            category: PlaceCategory.sea,
        },
    ];

    constructor(){}

    getAll(): Place[]{
        return this.places;
    }
}
