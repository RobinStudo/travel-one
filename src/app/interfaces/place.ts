export interface Place{
    id: number;
    name: string;
    picture: string;
    price: number;
    category: PlaceCategory;
    description: string;
}

export enum PlaceCategory{
    sea = 'Mer',
    mountain = 'Montagne',
    city = 'Urbain',
}
