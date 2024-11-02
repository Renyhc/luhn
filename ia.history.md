# DESARROLLO ASISTIDO POR IA **EXPERIMENTO: IDT-603 - Copilot.** 

**IDE: Github Copilot**

**Modelo**: OpenAI Codex\
**Desarrollador**: [René
Hernandez](mailto:rhernandez@primary.com.ar)

**Consigna**: [luhn-customvalidate]{.mark}

**Branch utilizado:**

[https://github.com/Renyhc/luhn/tree/luhn-customvalidate-copilot-codex](https://github.com/Renyhc/luhn/tree/luhn-customvalidate-copilot-codex)

**Lenguaje**: Tyscript

**Cobertura de test**: Desconocido

**Expertise**: intermedio

#### **Conclusiones del experimento**

Aspectos positivos:

-   Propuso solución con interfaces

-   Las repreguntas ayudaron en la aceleración del proceso

-   Hace referencias a los denominados "Code citations" con enlaces a repos base que toma como ejemplo para la respuesta o solución.

-   Propuso la solución del factory (similar a la solución propuesta por Aider)

Inconvenientes detectados:

-   No propuso generar directamente los nuevos archivos o editar los existentes

-   Repitió los mismos cambios o soluciones anteriores en la repreguntas

-   Al momento de insertar los cambios lo hace de manera algo caótica sin respetar el código anterior existente.

-   Propuso en primera instancia una solución siempre como nuevo algoritmo de la funcionalidad a implementar

#### 

#### **Detalles del ejercicio**

**Prompt inicial:**

> [Necesito crear una nueva funcionalidad en el proyecto para realizar
> validaciones ampliadas a otros tipos de algoritmos. El tipo de
> validación debe definirse por configuración. Como requisito debe
> seguir funcionando la validación actual y funcionar las nuevas
> validaciones con el algoritmo nuevo.]{.mark}

Para implementar la nueva funcionalidad de validaciones ampliadas,
podemos seguir estos pasos:

1.  Crear una interfaz para los algoritmos de validación.

2.  Implementar la interfaz para el algoritmo de Luhn.

3.  Implementar la interfaz para el nuevo algoritmo de validación.

4.  Crear una función que seleccione el algoritmo de validación basado en la configuración.

5.  Modificar la función de validación para usar el algoritmo seleccionado.

**Paso 1:** Crear una interfaz para los algoritmos de validación

```interface ValidationAlgorithm {

validate(input: string): boolean;

}

```

**Paso 2:** Implementar la interfaz para el algoritmo de Luhn

```class LuhnAlgorithm implements ValidationAlgorithm {

validate(input: string): boolean {

let trimmed = input.replace(/\[\\s\]/g, \"\"),

length: number = trimmed.length,

odd: boolean = false,

total: number = 0,

calc: number,

calc2: number;

if (!/\^\[0-9\]+\$/.test(trimmed)) {

return false;

}

for (let i = length; i \> 0; i\--) {

calc = parseInt(trimmed.charAt(i - 1));

if (!odd) {

total += calc;

} else {

calc2 = calc \* 2;

switch (calc2) {

case 10:

calc2 = 1;

break;

case 12:

calc2 = 3;

break;

case 14:

calc2 = 5;

break;

case 16:

calc2 = 7;

break;

case 18:

calc2 = 9;

break;

default:

calc2 = calc2;

}

total += calc2;

}

odd = !odd;

}

return total !== 0 && total % 10 === 0;

}

}

```

**Paso 3:** Implementar la interfaz para el nuevo algoritmo de
validación

```class NewAlgorithm implements ValidationAlgorithm {

validate(input: string): boolean {

// Implementar la lógica del nuevo algoritmo aquí

return true; // Placeholder

}

}

```

**Paso 4:** Crear una función que seleccione el algoritmo de validación
basado en la configuración

```function getValidationAlgorithm(type: string): ValidationAlgorithm {

switch (type) {

case \"luhn\":

return new LuhnAlgorithm();

case \"new\":

return new NewAlgorithm();

default:

throw new Error(\"Unknown validation type\");

}

}

```

**Paso 5:** Modificar la función de validación para usar el algoritmo
seleccionado

```export default function validate(stringToValidate: string,
algorithmType: string = \"luhn\"): boolean {

const algorithm = getValidationAlgorithm(algorithmType);

return algorithm.validate(stringToValidate);

}

```

Con estos cambios, la función de validación puede ahora utilizar
diferentes algoritmos de validación basados en la configuración
proporcionada.

> [Necesito agregar otro algoritmo de validación específico como ejemplo para la implementación de esta nueva funcionalidad.]{.mark}

Vamos a agregar un nuevo algoritmo de validación como ejemplo.
Supongamos que el nuevo algoritmo simplemente verifica si la longitud
del string es un número par. Aquí están los pasos actualizados:

1.  Crear una interfaz para los algoritmos de validación.

2.  Implementar la interfaz para el algoritmo de Luhn.

3.  Implementar la interfaz para el nuevo algoritmo de validación.

4.  Crear una función que seleccione el algoritmo de validación basado en la configuración.

5.  Modificar la función de validación para usar el algoritmo seleccionado.

**Paso 1:** Crear una interfaz para los algoritmos de validación

```interface ValidationAlgorithm {

validate(input: string): boolean;

}

```
**Paso 2:** Implementar la interfaz para el algoritmo de Luhn

Vamos a modificar el archivo luhn.ts para que implemente la interfaz
ValidationAlgorithm.

```class LuhnAlgorithm implements ValidationAlgorithm {

validate(input: string): boolean {

let trimmed = input.replace(/\[\\s\]/g, \"\"),

length: number = trimmed.length,

odd: boolean = false,

total: number = 0,

calc: number,

calc2: number;

if (!/\^\[0-9\]+\$/.test(trimmed)) {

return false;

}

for (let i = length; i \> 0; i\--) {

calc = parseInt(trimmed.charAt(i - 1));

if (!odd) {

total += calc;

} else {

calc2 = calc \* 2;

switch (calc2) {

case 10:

calc2 = 1;

break;

case 12:

calc2 = 3;

break;

case 14:

calc2 = 5;

break;

case 16:

calc2 = 7;

break;

case 18:

calc2 = 9;

break;

default:

calc2 = calc2;

}

total += calc2;

}

odd = !odd;

}

return total !== 0 && total % 10 === 0;

}

}

export default LuhnAlgorithm;

```

**Paso 3:** Implementar la interfaz para el nuevo algoritmo de
validación

Vamos a crear un nuevo archivo newAlgorithm.ts para el nuevo algoritmo
de validación.

```class NewAlgorithm implements ValidationAlgorithm {

validate(input: string): boolean {

return input.length % 2 === 0;

}

}

export default NewAlgorithm;

```

**Paso 4:** Crear una función que seleccione el algoritmo de validación
basado en la configuración

Vamos a crear un archivo validationFactory.ts para seleccionar el
algoritmo de validación.

```import LuhnAlgorithm from \'./luhn\';

import NewAlgorithm from \'./newAlgorithm\';

function getValidationAlgorithm(type: string): ValidationAlgorithm {

switch (type) {

case \"luhn\":

return new LuhnAlgorithm();

case \"new\":

return new NewAlgorithm();

default:

throw new Error(\"Unknown validation type\");

}

}

export default getValidationAlgorithm;
```

**Paso 5:** Modificar la función de validación para usar el algoritmo
seleccionado

Vamos a crear un archivo validate.ts para la función de validación
principal.

```import getValidationAlgorithm from \'./validationFactory\';

export default function validate(stringToValidate: string,
algorithmType: string = \"luhn\"): boolean {

const algorithm = getValidationAlgorithm(algorithmType);

return algorithm.validate(stringToValidate);

}

```

Con estos cambios, la función de validación puede ahora utilizar
diferentes algoritmos de validación basados en la configuración
proporcionada.

> [Puedes crear un algotimo de mayor complejidad para implementarlo como parte de esta nueva funcionalidad.]{.mark}


Claro, vamos a crear un algoritmo de validación más complejo. Supongamos
que el nuevo algoritmo verifica si el string es un palíndromo (se lee
igual de adelante hacia atrás) y además la suma de los caracteres
(considerando su valor ASCII) es un número primo.

**Paso 1:** Crear el nuevo algoritmo de validación

Vamos a crear un archivo complexAlgorithm.ts para el nuevo algoritmo de
validación.

```import ValidationAlgorithm from \'./validationAlgorithm\';

class ComplexAlgorithm implements ValidationAlgorithm {

validate(input: string): boolean {

// Verificar si el string es un palíndromo

const isPalindrome = input === input.split(\'\').reverse().join(\'\');

if (!isPalindrome) {

return false;

}

// Calcular la suma de los valores ASCII de los caracteres

const sum = input.split(\'\').reduce((acc, char) =\> acc +
char.charCodeAt(0), 0);

// Verificar si la suma es un número primo

if (sum \< 2) return false;

for (let i = 2; i \<= Math.sqrt(sum); i++) {

if (sum % i === 0) return false;

}

return true;

}

}

export default ComplexAlgorithm;

```

**Paso 2:** Actualizar la fábrica de validación para incluir el nuevo
algoritmo

Vamos a actualizar el archivo validationFactory.ts para incluir el nuevo
algoritmo.

```import LuhnAlgorithm from \'./luhnAlgorithm\';

import NewAlgorithm from \'./newAlgorithm\';

import ComplexAlgorithm from \'./complexAlgorithm\';

function getValidationAlgorithm(type: string): ValidationAlgorithm {

switch (type) {

case \"luhn\":

return new LuhnAlgorithm();

case \"new\":

return new NewAlgorithm();

case \"complex\":

return new ComplexAlgorithm();

default:

throw new Error(\"Unknown validation type\");

}

}

export default getValidationAlgorithm;

```

**Paso 3:** Modificar la función de validación para usar el algoritmo
seleccionado

El archivo luhn.ts ya está configurado para usar la fábrica de
validación, por lo que no necesita cambios adicionales.

```import getValidationAlgorithm from \'./validationFactory\';

export default function validate(stringToValidate: string,
algorithmType: string = \"luhn\"): boolean {

const algorithm = getValidationAlgorithm(algorithmType);

return algorithm.validate(stringToValidate);

}

```

Con estos cambios, ahora tienes un algoritmo de validación más complejo
que verifica si el string es un palíndromo y si la suma de los valores
ASCII de sus caracteres es un número primo.

> [Puedes modificar los test existentes para que se adapten a la nuea
implementación y crear nuevos test case para los dos nuevo algoritmos
propuestos?]{.mark}

Claro, vamos a modificar los tests existentes para que se adapten a la
nueva implementación y agregar nuevos casos de prueba para los dos
nuevos algoritmos propuestos.

**Modificar los tests existentes**

Vamos a modificar los tests existentes para que utilicen la función
validate y permitan especificar el tipo de algoritmo.

Crear nuevos casos de prueba para los nuevos algoritmos

Vamos a agregar casos de prueba para el NewAlgorithm y el ComplexAlgorithm.

```import should from \"should\";

import validate from \"../dist/validate.js\";

const \_VALID_TEST_NUMBER = \"4012111111111111\";

describe(\"Validation Algorithms\", function(){

describe(\"Luhn Validation\", function(){

describe(\"Basic Requirements\", function(){

it(\"should trim the number\", function(){

validate(\_VALID_TEST_NUMBER + \" \", \"luhn\").should.be.true;

});

it(\"should only allow numeric number strings\", function(){

validate(\_VALID_TEST_NUMBER + \"A\", \"luhn\").should.be.false;

});

});

describe(\"Happy Path\", function(){

it(\"should return true for valid number.\", function(){

validate(\_VALID_TEST_NUMBER, \"luhn\").should.be.true;

});

});

describe(\"Test Credit Card Numbers\", function(){

it(\"should pass America Express - 378282246310005\", function(){

var number = \"378282246310005\";

validate(number, \"luhn\").should.be.true;

});

it(\"should pass America Express - 371449635398431\", function(){

var number = \"371449635398431\";

validate(number, \"luhn\").should.be.true;

});

it(\"should pass America Express Corporate- 378734493671000\",
function(){

var number = \"378734493671000\";

validate(number, \"luhn\").should.be.true;

});

it(\"should pass Australian BankCard - 5610591081018250\", function(){

var number = \"5610591081018250\";

validate(number, \"luhn\").should.be.true;

});

});

});

describe(\"New Algorithm Validation\", function(){

it(\"should return true for even length strings\", function(){

validate(\"1234\", \"new\").should.be.true;

});

it(\"should return false for odd length strings\", function(){

validate(\"12345\", \"new\").should.be.false;

});

});

describe(\"Complex Algorithm Validation\", function(){

it(\"should return true for palindromes with prime ASCII sum\",
function(){

validate(\"aba\", \"complex\").should.be.true; // \'a\' + \'b\' + \'a\'
= 97 + 98 + 97 = 292 (prime)

});

it(\"should return false for non-palindromes\", function(){

validate(\"abc\", \"complex\").should.be.false;

});

it(\"should return false for palindromes with non-prime ASCII sum\",
function(){

validate(\"aa\", \"complex\").should.be.false; // \'a\' + \'a\' = 97 +
97 = 194 (not prime)

});

});

});

```
Con estos cambios, los tests ahora cubren los tres algoritmos de
validación: Luhn, NewAlgorithm y ComplexAlgorithm.


> [Pgenera test case correctos para testear el ComplexAlgorithm]{.mark}

Para escribir un palíndromo cuya suma ASCII sea un número primo,
necesitamos encontrar una cadena que sea un palíndromo y cuya suma de
los valores ASCII de sus caracteres sea un número primo.

Un ejemplo de tal cadena es \"aceca\", cuya suma ASCII es 97 (a) + 99
(c) + 101 (e) + 99 (c) + 97 (a) = 493, que es un número primo.

Aquí está el test actualizado:

```describe(\"Complex Algorithm Validation\", function(){

it(\"should return true for palindromes with prime ASCII sum\",
function(){

validate(\"aceca\", \"complex\").should.be.true; // \'a\' + \'c\' +
\'e\' + \'c\' + \'a\' = 97 + 99 + 101 + 99 + 97 = 493 (prime)

});

it(\"should return false for non-palindromes\", function(){

validate(\"abc\", \"complex\").should.be.false;

});

it(\"should return false for palindromes with non-prime ASCII sum\",
function(){

validate(\"aa\", \"complex\").should.be.false; // \'a\' + \'a\' = 97 +
97 = 194 (not prime)

});

it(\"should return true for palindromes with prime ASCII sum (longer
string)\", function(){

validate(\"abccba\", \"complex\").should.be.true; // \'a\' + \'b\' +
\'c\' + \'c\' + \'b\' + \'a\' = 97 + 98 + 99 + 99 + 98 + 97 = 588
(prime)

});

it(\"should return false for palindromes with non-prime ASCII sum
(longer string)\", function(){

validate(\"abcdcba\", \"complex\").should.be.false; // \'a\' + \'b\' +
\'c\' + \'d\' + \'c\' + \'b\' + \'a\' = 97 + 98 + 99 + 100 + 99 + 98 +
97 = 688 (not prime)

});

it(\"should return true for single character palindrome\", function(){

validate(\"a\", \"complex\").should.be.true; // \'a\' = 97 (prime)

});

it(\"should return false for empty string\", function(){

validate(\"\", \"complex\").should.be.false;

});

});

```

Con este test, verificamos que el algoritmo complejo funcione
correctamente para palíndromos cuya suma ASCII sea un número primo.

#### **Resultado de Tests**

Luhn Validation

Basic Requirements

✔ should trim the number

✔ should only allow numeric number strings

Happy Path

✔ should return true for valid number.

Test Credit Card Numbers

✔ should pass America Express - 378282246310005

✔ should pass America Express - 371449635398431

✔ should pass America Express Corporate- 378734493671000

✔ should pass Australian BankCard - 5610591081018250

✔ should pass Diners Club - 30569309025904

✔ should pass Diners Club - 38520000023237

✔ should pass Discover - 6011111111111117

✔ should pass Discover - 6011000990139424

✔ should pass JCB - 3530111333300000

✔ should pass JCB - 3566002020360505

✔ should pass MasterCard - 5555555555554444

✔ should pass MasterCard - 5105105105105100

✔ should pass Visa - 4111111111111111

✔ should pass Visa - 4012888888881881

✔ should pass Visa - 4222222222222

Test Credit Card Numbers with Spaces

✔ should pass Visa - 4111 1111 1111 1111

✔ should pass Visa - 4012 8888 8888 1881

✔ should pass American Express - 3782 822463 10005

Random large number examples

✔ should have exactly one valid checksum digit after 948204694057049730

✔ should have exactly one valid checksum digit after
61441632272725062558

✔ should have exactly one valid checksum digit after
83763347848592781938

✔ should have exactly one valid checksum digit after 89814917543230184

✔ should have exactly one valid checksum digit after 592680036837395284

✔ should have exactly one valid checksum digit after
66833862066008727982

✔ should have exactly one valid checksum digit after 88579314260431677

✔ should have exactly one valid checksum digit after 04414623010089936

✔ should have exactly one valid checksum digit after 025796161620960818

✔ should have exactly one valid checksum digit after 06681556420563667

User Submitted Issues

✔ should return false for number of zero.

✔ should return false for number of 4 zeroes.

✔ should return false for number of 16 zeroes.

✔ should return false if digits add to 0.

✔ should return false if passed an empty string

New Algorithm Validation

✔ should return true for even length strings

✔ should return false for odd length strings

Complex Algorithm Validation

✔ should return true for palindromes with prime ASCII sum

✔ should return false for non-palindromes

✔ should return false for palindromes with non-prime ASCII sum

✔ should return false for palindromes with non-prime ASCII sum (longer
string)

✔ should return true for single character palindrome

✔ should return false for empty string

44 passing (27ms)
