/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

function triangulo(a, b, c) {
  if (a == b && a == c) {
    console.log('Triângulo Equilátero')
  } else if (
    (a == b && a != c) ||
    (a == c && a != b) ||
    (b == a && b != c) ||
    (b == c && b != a) ||
    (c == a && c != b) ||
    (c == b && c != a)
  ) {
    console.log('Triângulo Isósceles')
  } else {
    console.log('Triângulo Escaleno')
  }
}

triangulo(5, 4, 7)
