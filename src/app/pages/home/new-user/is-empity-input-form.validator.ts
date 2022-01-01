import { AbstractControl } from "@angular/forms";

export function isEmpityInputValidatorForm (control: AbstractControl) {
  const value = control.value as string;
  if (value === '') {
    return {isEmpity: true};
  } else {
    return null;
  }
}

export function minusculoValidator (control: AbstractControl) {
  const value = control.value as string;
  if (value !== value.toLocaleLowerCase()) {
    return {minusculo: true};
  } else {
    return null;
  }
}
