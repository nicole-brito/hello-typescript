//Unknown = Any (só que mais seguro)

let y: any
y = 40
y = '20'

const z = 10

console.log(y + z) // 2010 (concatenou 20 + 10)

let x: unknown;
x = 100;
x = '10';
x = 30;

if (typeof x === 'number') console.log(x + z) //40 (30 + 10)
