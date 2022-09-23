package Contas;

public class ContaPoupanca extends Conta{
	
	public ContaPoupanca(int agencia, int numero) {
		super(agencia, numero);
	}
	
	@Override
	public void sacar(double valor) {
		double valorSacado=valor+0.2;
		 super.sacar(valorSacado);
	}

}
