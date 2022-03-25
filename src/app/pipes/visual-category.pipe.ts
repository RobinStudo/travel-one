import { Pipe, PipeTransform } from '@angular/core';
import { PlaceCategory } from "../interfaces/place";

@Pipe({
    name: 'visualCategory'
})
export class VisualCategoryPipe implements PipeTransform {
    transform(categoryName: string): string{
        let icon = '';

        switch(categoryName){
            case PlaceCategory.sea:
                icon = '🌊';
                break;
            case PlaceCategory.city:
                icon = '🏢';
                break;
            case PlaceCategory.mountain:
                icon = '⛰️';
                break;
        }

        return icon + ' ' + categoryName;
    }
}
