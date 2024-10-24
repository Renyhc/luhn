import { IValidator } from './IValidator';
import { LuhnValidator } from './LuhnValidator';
import { VerhoeffValidator } from './VerhoeffValidator';

export type ValidatorType = 'luhn' | 'verhoeff';

export class ValidatorFactory {
  private static validators: Map<ValidatorType, IValidator> = new Map([
    ['luhn', new LuhnValidator()],
    ['verhoeff', new VerhoeffValidator()]
  ]);

  static getValidator(type: ValidatorType): IValidator {
    const validator = this.validators.get(type);
    if (!validator) {
      throw new Error(`Validator type '${type}' not supported`);
    }
    return validator;
  }
}
