package Java_e_java.util_Coleções_Wrappers_e_Lambda_expressions;

import Contas.ContaCorrente;

public class TesteReferencias {
	public static void main(String[] args) {
		
		ContaCorrente contas[] = new ContaCorrente[5]; //criando um espaço para alocar objetos do tipo conta
		
		ContaCorrente cc1 = new ContaCorrente(11,11);
		contas[0] = cc1; //colocando cc1 no primeiro espaço de contas
		
		contas[0].getNumero(); //ele consegue acessar os metodos
		
		ContaCorrente ref = contas[0]; //guardando em uma variavel
		ref.getNumero(); //tambem é possivel acessar os metodos quando coloca em uma variavel
	}

}
