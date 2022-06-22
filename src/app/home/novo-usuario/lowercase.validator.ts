import { AbstractControl } from "@angular/forms";

export function lowercaseValidator(control: AbstractControl) {
  const value = control.value as string;

  if (value !== value.toLowerCase()) {
    return { lowercaseValidator: true };

  } else {
    return null;
  }
}
