import {Cliente} from "./Cliente.js";  //possibilita chamar classes de outros arquivos 
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupança.js";
import { ContaSalario } from "./contas/ContaSalario.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";
import { Diretor } from "./funcionarios/Diretor.js";

const cliente1 =new Cliente("Ricardo", 111223233 ) // isso faz como que os atributos de "Cliente" sejam colocados em uma variavel
// com o "constructor" no arquivo "Cliente.js" eu posso fazer diretamente dentro dos parentes a atribuição de valores
//isso é uma referencia ao objeto guardado na memoria e não o objeto em sim


const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);












