enum ValidationAlgorithm {
  Luhn = "Luhn",
  Verhoeff = "Verhoeff",
}

// Matrices utilizadas por el algoritmo Verhoeff
const D = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];

const P = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

const INV = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

function verhoeffValidate(input: string): boolean {
  let check = 0;
  for (let i = 0; i < input.length; i++) {
    check = D[check][P[(i + 1) % 8][parseInt(input.charAt(input.length - 1 - i))]];
  }
  return check === 0;
}

function luhnValidate(input: string): boolean {
  let trimmed = input.replace(/[\s]/g, "");
  let length = trimmed.length;
  let odd = false;
  let total = 0;

  if (!/^[0-9]+$/.test(trimmed)) {
    return false;
  }

  for (let i = length; i > 0; i--) {
    let calc = parseInt(trimmed.charAt(i - 1));
    if (!odd) {
      total += calc;
    } else {
      let calc2 = calc * 2;
      calc2 = calc2 > 9 ? calc2 - 9 : calc2;
      total += calc2;
    }
    odd = !odd;
  }

  return total !== 0 && total % 10 === 0;
}

export default function validate(stringToValidate: string, algorithm: ValidationAlgorithm = ValidationAlgorithm.Luhn): boolean {
  switch (algorithm) {
    case ValidationAlgorithm.Luhn:
      return luhnValidate(stringToValidate);
    case ValidationAlgorithm.Verhoeff:
      return verhoeffValidate(stringToValidate);
    default:
      throw new Error("Algoritmo de validación no soportado");
  }
}
