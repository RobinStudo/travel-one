import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class UrlPictureValidator{

    static validate(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            try{
                new URL(control.value);
            }catch(e){
                return {invalidUrl: true};
            }

            return null;
        };
    }

}
