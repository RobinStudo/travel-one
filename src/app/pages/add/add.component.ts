import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlaceCategory } from "../../interfaces/place";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    form!: FormGroup;
    categories: any = PlaceCategory;

    constructor(private builder: FormBuilder){}

    ngOnInit(): void{
        this.form = this.builder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(60),
            ]],
            picture: [''],
            price: [''],
            category: [''],
            description: [''],
        });
    }

    onSubmit(): void{
        console.log(this.form.value);
    }
}
