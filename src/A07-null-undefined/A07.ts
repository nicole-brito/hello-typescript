let x;

if (typeof x === 'undefined') {
  console.log('x is undefined');
}

x = null;

if (x === null) {
  console.log('x is null');
}

// x is undefined
// x is null

export function squareOf(x: any) {
    //Evita boy, mas se precisar é assim:
    if (typeof x === 'number')
        return x * x;
    return null;
}

const squareOfTwo = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwo === null) {
    console.log('Conta inválida');
}
else {
    console.log(squareOfTwo);
}

if (squareOfTwoString === null) {
    console.log('Conta inválida');
}
else {
    console.log(squareOfTwo);
}
