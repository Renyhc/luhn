import LuhnAlgorithm from './lunhAlgorithm';
import NewAlgorithm from './newalgorithm';
import ComplexAlgorithm from './complexAlgorithm';

function getValidationAlgorithm(type: string): ValidationAlgorithm {
  switch (type) {
    case "luhn":
      return new LuhnAlgorithm();
    case "new":
      return new NewAlgorithm();
    case "complex":
      return new ComplexAlgorithm();
    default:
      throw new Error("Unknown validation type");
  }
}

export default getValidationAlgorithm;