package Contas;

public class ContaCorrente extends Conta  {
	
	public ContaCorrente(int agencia, int numero) {
		super(agencia, numero);
	}

	@Override
	public void sacar(double valor) {
		double valorSacado=valor+0.2;
		 super.sacar(valorSacado);
	}

}
