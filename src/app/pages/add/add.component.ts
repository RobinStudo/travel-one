import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlaceCategory } from "../../interfaces/place";
import { UrlPictureValidator } from "../../validators/url-picture.validator";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    form!: FormGroup;
    categories: any = PlaceCategory;

    constructor(
        private builder: FormBuilder,
        private urlPictureValidator: UrlPictureValidator
    ){}

    ngOnInit(): void{
        this.form = this.builder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(60),
            ]],
            picture: ['', {
                validators: [
                    Validators.required,
                    this.urlPictureValidator.validate(),
                ],
                asyncValidators: [this.urlPictureValidator.asyncValidate()]
            }],
            price: ['', [
                Validators.required,
                Validators.pattern('\\d+(.\\d{1,2})?'),
                Validators.min(100),
                Validators.max(10000),
            ]],
            category: ['', [
                Validators.required,
            ]],
            description: ['', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10000),
            ]],
        });
    }

    onSubmit(): void{
        console.log(this.form);
    }
}
