
import getValidationAlgorithm from './validationFactory';

export default function validate(stringToValidate: string, algorithmType: string = "luhn"): boolean {
  const algorithm = getValidationAlgorithm(algorithmType);
  return algorithm.validate(stringToValidate);
}
