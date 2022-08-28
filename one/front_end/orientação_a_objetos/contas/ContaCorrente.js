import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //classes tambem podem ter comportamentos 
    // extend pega atributos de outras classes e coloca nessa clasee
    static numerodeContas=0; //static deixa o objeto estatico 
    
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numerodeContas++; //assim você não pega apenas da conta atual e sim de todas as contas
    }

    //sobrescrevendo o metodo sacar
    sacar(valor){ //função dentro de uma classe
        let taxa = 1.1
        return this._sacar(valor, taxa) //poderia usar o "super"
        //this é usado para pegar o saldo desta conta corrente. Sendo assim possivel acessar qualquer conta corrente
        
    }

    depositar(valor){
        return this._depositar(valor)

    }
   
}