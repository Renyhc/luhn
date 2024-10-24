import { ValidatorFactory } from './validators/ValidatorFactory';

function luhn(stringToValidate: string): boolean {
  return ValidatorFactory.getValidator('luhn').validate(stringToValidate);
}

function verhoeff(stringToValidate: string): boolean {
  return ValidatorFactory.getValidator('verhoeff').validate(stringToValidate);
}

export { luhn, verhoeff };