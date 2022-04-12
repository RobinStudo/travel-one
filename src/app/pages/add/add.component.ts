import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlaceCategory } from "../../interfaces/place";
import { UrlPictureValidator } from "../../validators/url-picture.validator";
import { LanguageValidator } from "../../validators/language.validator";
import { PlaceService } from "../../services/place/place.service";
import { Router } from "@angular/router";

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
        private router: Router,
        private placeService: PlaceService,
        private urlPictureValidator: UrlPictureValidator
    ){}

    ngOnInit(): void{
        this.form = this.builder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3),
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
                LanguageValidator.validate(),
            ]],
        });
    }

    onSubmit(): void{
        if(this.form.invalid){
            return;
        }

        const place = this.form.value;
        this.placeService.add(place).subscribe({
            next: () => {
                this.router.navigate(['list']);
            },
            error: () => {
                alert("Erreur lors de l'envoi du formulaire");
            },
        });
    }
}
