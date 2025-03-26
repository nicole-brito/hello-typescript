//Tipo tuple é específico do TypeScript
//É um array que tem um número fixo de elementos com tipos fixos

//                    Tuple 👇
const dadosCliente1: readonly [number, string] = [1, 'Nic'];
const dadosCliente2: [number, string, string?] = [1, 'Nic', 'Brt'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Nic', 'Brt', 'Slv'];

dadosCliente2[0] = 100;
console.log(dadosCliente1); // [ 100, 'Nic' ]
console.log(dadosCliente2); // [ 1, 'Nic', 'Brt' ]
console.log(dadosCliente3); // [ 1, 'Nic', 'Brt', 'Slv' ]

dadosCliente2.push(100);
dadosCliente3.pop();

