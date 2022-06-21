export class Cliente{ //exporta a classe para outros arquivos
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){  //constructor é uma função especial
        this.nome = nome;
        this._cpf = cpf
    }
}