export class Conta{
    constructor( saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
           throw new Error("não pode instanciar um tipo conta") // throw cria um erro e new Error é uma classe do proprio js que lança erros
        }
        this._saldo = saldoInicial;  //assim eu estou criando objetos sem ter que crialos fora do constructor
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

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

    //metodo abstrato
    sacar(valor){ //função dentro de uma classe
        throw new Error("não pode ser chamado diretamente, você esqueceu de colocar o metodo sacar em alguma conta")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa *valor
        if(this._saldo>=valorSacado){ //this é usado para pegar o saldo desta conta corrente. Sendo assim possivel acessar qualquer conta corrente
            this._saldo-=valorSacado;
            console.log("seu novo saldo é de "+ this._saldo)
            return valorSacado
            
        }else{
            console.log("não é possivel sacar esse valor")
            return 0
        }

    }


    depositar(valor){
        throw new Error("não pode ser chamado diretamente, você esqueceu de colocar o metodo sacar em alguma conta")
    }
    
    _depositar(valor){
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