//Never = Nunca vai retornar nada
//Erro ou um laço infinito

export function criaErro(): never {
  throw new Error('Erro qualquer');
}


// criaErro();
