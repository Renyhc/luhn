import { IValidator } from './IValidator';

/**
 * Implementación del algoritmo de verificación Verhoeff.
 * 
 * El algoritmo Verhoeff es un algoritmo de dígito de verificación que puede detectar:
 * - 100% de los errores de dígito único
 * - 100% de los errores de transposición de dígitos adyacentes
 * - 100% de los errores de salto de transposición (ej: 12345 → 12543)
 * - 100% de los errores de gemelos (ej: xx → yy)
 * - 90.67% de los errores aleatorios
 */
export class VerhoeffValidator implements IValidator {
  /**
   * Tabla de multiplicación en base 10.
   * Esta matriz define las operaciones de multiplicación para el grupo dihedral D5.
   * Se usa para calcular el dígito de verificación.
   */
  private static d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  ];

  /**
   * Tabla de permutación.
   * Define cómo se permutan los dígitos en cada posición.
   * La permutación depende de la posición del dígito en el número.
   */
  private static p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
  ];

  /**
   * Tabla de inversión.
   * Define los inversos multiplicativos para cada dígito en el grupo dihedral D5.
   */
  private static inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

  /**
   * Valida un número usando el algoritmo Verhoeff.
   * 
   * El proceso de validación funciona así:
   * 1. Limpia la entrada de espacios
   * 2. Verifica que solo contenga dígitos
   * 3. Invierte los dígitos para procesarlos de derecha a izquierda
   * 4. Para cada dígito:
   *    - Aplica una permutación basada en su posición
   *    - Multiplica el resultado usando la tabla de multiplicación
   * 5. El número es válido si el resultado final es 0
   * 
   * @param stringToValidate El número a validar
   * @returns true si el número es válido según el algoritmo Verhoeff
   */
  validate(stringToValidate: string): boolean {
    const trimmed = stringToValidate.replace(/[\s]/g, "");
    
    if (!/^[0-9]+$/.test(trimmed)) {
      return false;
    }

    let c = 0;
    const len = trimmed.length;
    const digits = trimmed.split('').map(Number).reverse();

    for (let i = 0; i < len; i++) {
      c = VerhoeffValidator.d[c][VerhoeffValidator.p[i % 8][digits[i]]];
    }

    return c === 0;
  }
}
