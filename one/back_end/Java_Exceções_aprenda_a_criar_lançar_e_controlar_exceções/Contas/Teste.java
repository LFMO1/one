package Contas;

public class Teste {
	public static void main(String[] args) {
		
		Conta conta = new ContaCorrente(123,321);
		
		conta.depositar(200);
		
		try {
			conta.sacar(210);
		}catch(SaldoInsuficienteException ex) {
			System.out.println(ex.getMessage());
		}
		
		System.out.println(conta.getSaldo());
	}

}
