package Java_e_java.util_Coleções_Wrappers_e_Lambda_expressions;

import Contas.Conta;

public class GuardadorDeReferencias {
	
	private Conta[] referencias;
	private int posicaoLivre;
	
	public GuardadorDeReferencias(){
		this.referencias = new Conta[10];
		this.posicaoLivre =0;
	}
	
	public void adiciona(Conta ref) {
		this.referencias[this.posicaoLivre]=ref;
		this.posicaoLivre++;
	}
	
	public int getQuantidadeDeElementos() {
		return this.posicaoLivre;
	}
	
	public Conta getPosicao(int pos) {
		return this.referencias[pos]; 
	}
}
