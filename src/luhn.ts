import { ValidatorFactory } from './validators/ValidatorFactory';

export default function validate(stringToValidate: string): boolean {
  return ValidatorFactory.getValidator('luhn').validate(stringToValidate);
}
