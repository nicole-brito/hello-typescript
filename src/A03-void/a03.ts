//...args = rest operator (pode receber quantos argumentos quiser)
//void = não retorna nada (não é o mesmo que undefined)
//rest operator é um array
function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Nic',
    sobrenome: 'Brt',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Ingrid', 'Tom');
pessoa.exibirNome();

//Precisa exportar (alguma coisa) porque está utilizando o escopo global e a variável pessoa já foi definida em outro arquivo
export { pessoa };
