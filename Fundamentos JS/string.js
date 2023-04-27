const escola = 'Cod3r'

console.log(escola.charAt(4)) // busca o caracter que está na posição entre os ()
console.log(escola.charAt(5)) // Js tenta nao buscar erros
console.log(escola.charCodeAt(3)) // busca o valor do caracter entre os () nas tabela Ascii https://www.matematica.pt/util/resumos/tabela-ascii.php
console.log(escola.indexOf('r')) // busca a posiçao do caractere entre os ()

console.log(escola.substring(1)) // imprime os caracteres da posição até o final
console.log(escola.substring(0, 3)) // "comece o INDICE 0 e me de 3 caracteres" nao inclui o indice final

console.log('Escola '.concat(escola).concat('!')) // diferente do NUMBER  , pode-se chamar O LITERAL  do valor sem precisar estar em uma variavel ou constante
console.log('Escola ' + escola + '!') // concatenação

console.log(escola.replace(3, 'e'))

console.log('João,Ana,Maria'.split(',')) // gerando um Array com 3 elementos independentes
