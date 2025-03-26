//Não dá para criar como objA = {} e nem objA: object, use Record: (mas não é muito seguro)
const objA: Record<string, unknown> = {
  chaveA: 'A',
  chaveB: 'B'
};

//Pode alterar o valor da chave
objA.chaveA = 'C'

//Mas não pode criar uma nova chave
// objA.chaveC = "Nova"

const objB: {
    chaveA: string;
    readonly chaveB: string;
    //Deixa aberta a possibilidade de criar a chaveC
    chaveC?: string;
    //Top coisas que não usa na vida real:
    [key: string]: unknown;
} = {
    chaveA: "A",
    chaveB: "B",
}

objB.chaveA = "E";
objB.chaveC = "C";
objB.chaveD = "D";
// Permite criar só mais 1 chave
// objB.chaveE
