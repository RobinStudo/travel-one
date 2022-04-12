import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, of, Subscriber } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UrlPictureValidator{

    validate(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            try{
                new URL(control.value);
            }catch(e){
                return {invalidUrl: true};
            }

            return null;
        };
    }

    asyncValidate(): AsyncValidatorFn{
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return new Observable<ValidationErrors | null>((observer: Subscriber<any>) => {
                const img = new Image();
                img.onerror = () => {
                    observer.next({invalidImageUrl: true});
                    observer.complete();
                };
                img.onload = () => {
                    observer.next(null);
                    observer.complete();
                };
                img.src = control.value;
            });
        };
    }
}
