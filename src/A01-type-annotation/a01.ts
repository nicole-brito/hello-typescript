/* eslint-disable */
// 1. Type Annotation
//Inferência de tipo

let nome: string = 'Nic'; // ´´ '' ""
let idade: number = 23; //ponto flutuante, hexadecimais, binários, octais
let adulto: boolean = true; //true ou false
//tipo: minusculo e valor: maiusculo
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n; //bigint

// Arrays
//                  Generics
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
//                   Type
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos

//  { chave: valor }                             //? Torna opcional
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 23,
    nome: 'Nic'
};

console.log(pessoa.nome);

// Funções
function soma(x: number, y: number): number {
    return y + x;
}

//O TS infere tipos sozinho and I think its beautiful
const result = soma(2, 2)

//??
const soma2: (x: number, y:number) => number = (x, y) => x + y;
