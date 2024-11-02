class ComplexAlgorithm implements ValidationAlgorithm {
    validate(input: string): boolean {
      // Verificar si el string es un palíndromo
      const isPalindrome = input === input.split('').reverse().join('');
      if (!isPalindrome) {
        return false;
      }
  
      // Calcular la suma de los valores ASCII de los caracteres
      const sum = input.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
      // Verificar si la suma es un número primo
      if (sum < 2) return false;
      for (let i = 2; i <= Math.sqrt(sum); i++) {
        if (sum % i === 0) return false;
      }
  
      return true;
    }
  }
  
  export default ComplexAlgorithm;