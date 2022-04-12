import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// @ts-ignore
import * as wordList from "french-badwords-list";

export class LanguageValidator{
    static validate(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors|null => {
            const regex = wordList.regex;

            if(control.value.match(regex)){
                return {badLanguage: true};
            }

            return null;
        };
    }
}
