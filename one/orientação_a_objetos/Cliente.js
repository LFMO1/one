export class Cliente{ //exporta a classe para outros arquivos


    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){  //constructor é uma função especial
        this.nome = nome;
        this._cpf = cpf
        this._senha = senha
    }
    autenticar(){
       return true
    }
}