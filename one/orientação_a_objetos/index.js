import {Cliente} from "./Cliente.js";  //possibilita chamar classes de outros arquivos 
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 =new Cliente("Ricardo", 111223233 ) // isso faz como que os atributos de "Cliente" sejam colocados em uma variavel
// com o "constructor" no arquivo "Cliente.js" eu posso fazer diretamente dentro dos parentes a atribuição de valores

const cliente2 = new Cliente("Alice", 444444444)
//isso é uma referencia ao objeto guardado na memoria e não o objeto em sim


const contaCorrenteRicardo= new ContaCorrente(1001, cliente1)

const contaCorrenteAlice= new ContaCorrente(102, cliente2);

contaCorrenteRicardo.depositar(30)



console.log(ContaCorrente.numerodeContas)




