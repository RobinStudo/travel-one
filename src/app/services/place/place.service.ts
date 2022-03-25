import {Injectable} from '@angular/core';
import {Place, PlaceCategory} from "../../interfaces/place";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
    private places: Place[] = [
        {
            id: 1,
            name: 'Paris',
            picture: 'https://bit.ly/36DcJol',
            price: 250,
            category: PlaceCategory.city,
        },
        {
            id: 2,
            name: 'Berlin',
            picture: 'https://bit.ly/3wzysby',
            price: 200,
            category: PlaceCategory.city,
        },
        {
            id: 3,
            name: 'Annecy',
            picture: 'https://bit.ly/37N2sGE',
            price: 150,
            category: PlaceCategory.mountain,
        },
        {
            id: 4,
            name: 'Bali',
            picture: 'https://bit.ly/3JGK9kK',
            price: 1500,
            category: PlaceCategory.sea,
        },
        {
            id: 5,
            name: 'Alpes',
            picture: 'https://bit.ly/36kz5eH',
            price: 620,
            category: PlaceCategory.mountain,
        },
        {
            id: 6,
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

    get(id: number): Place|undefined{
        return this.places.find(place => place.id === id);
    }
}
