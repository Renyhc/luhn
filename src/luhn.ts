
// Importing the existing luhn and verhoeff algorithm modules
import luhnAlgorithm from './luhnAlgorithm';
import verhoeffAlgorithm from './verhoeffAlgorithm';

// Interface for Validation Algorithms
interface ValidationAlgorithm {
  (input: string): boolean;
}

// Existing Luhn Algorithm
const luhn: ValidationAlgorithm = luhnAlgorithm;

// Existing Verhoeff Algorithm
const verhoeff: ValidationAlgorithm = verhoeffAlgorithm;

// Configuration for selecting the algorithm
enum AlgorithmType {
  LUHN = 'luhn',
  VERHOEFF = 'verhoeff',
}

interface ValidationConfig {
  algorithm: AlgorithmType;
}

// Default configuration
let config: ValidationConfig = {
  algorithm: AlgorithmType.LUHN,
};

// Function to set the validation configuration
export function setValidationConfig(newConfig: ValidationConfig) {
  config = newConfig;
}

// Main validation function that uses the configured algorithm
export function validate(input: string): boolean {
  switch (config.algorithm) {
    case AlgorithmType.LUHN:
      return luhn(input);
    case AlgorithmType.VERHOEFF:
      return verhoeff(input);
    default:
      throw new Error('Unsupported validation algorithm');
  }
}