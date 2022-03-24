export interface Place{
    name: string;
    picture: string;
    price: number;
    category: PlaceCategory;
}

export enum PlaceCategory{
    sea = 'Mer',
    mountain = 'Montagne',
    city = 'Urbain',
}
