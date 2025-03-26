//Any = qualquer coisa = não é legal de ter no TS
/* function showMessage(msg) {
    return msg;
}
 */

// A não ser que você queira (você não quer)
function receiveAnything(msg: any) {
  return msg;
}

console.log(receiveAnything([1, 2, 3]));
console.log(receiveAnything('Qualquer coisa tem cabelo'));
console.log(receiveAnything(12));
