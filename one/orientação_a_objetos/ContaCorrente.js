import { Cliente } from "./Cliente.js";

export class ContaCorrente{ //classes tambem podem ter comportamentos 
    static numerodeContas=0; //static deixa o objeto estatico 
    agencia;
    _saldo =0; //# objeto privado pelo node
    _cliente   // objeto privado pela comunidade JS

    get saldo(){ //com o get fica impossivel fazer uma atribuição direta. O get sempre ira retornar um valor não altera-lo
        return this._saldo;
    }

    //set (assessor)
    set cliente(novoValor){ // faz a instacia receber valores expecificos, evintando erros, por exemplo colocar um 0 na hora de atribuir um falor a instancia de um objeto
        if(novoValor instanceof Cliente){ // instanceof instanceia um cliente, no caso, foi criando uma condição que se for uma instancia da classe "Clinte" tu entra no for
            this._cliente = novoValor;
        }

    }

    get cliente(){ 
        return this._cliente
    }

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numerodeContas++; //assim você não pega apenas da conta atual e sim de todas as contas

    }



    sacar(valor){ //função dentro de uma classe
        if(this._saldo>=valor){ //this é usado para pegar o saldo desta conta corrente. Sendo assim possivel acessar qualquer conta corrente
            this._saldo-=valor;
            console.log("seu novo saldo é de "+ this._saldo)
            
        }else{
            console.log("não é possivel sacar esse valor")
        }

    }

    depositar(valor){
        if(valor>0){
            this._saldo+=valor;
            console.log("seu novo saldo é de "+ this._saldo)
        }else{
            console.log("não é possivel depositar numeros negativos")
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor) //tirando o valor de uma conta
        conta.depositar(valorSacado) //colocando o valor em outra conta 

    }
}