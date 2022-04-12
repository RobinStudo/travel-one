import { Injectable } from '@angular/core';
import { Place } from "../../interfaces/place";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
    constructor(private http: HttpClient){}

    getAll(): Observable<Place[]>{
        return this.http.get<Place[]>('http://localhost:3000/places');
    }

    get(id: number): Observable<Place>{
        return this.http.get<Place>('http://localhost:3000/places/' + id);
    }
}
