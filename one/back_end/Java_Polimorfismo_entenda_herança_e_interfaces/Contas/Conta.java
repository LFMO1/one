package Contas;

public abstract class Conta {
		private double saldo;
		private int agencia;
		private int numero;
		 
		private static int total; 
		
		public Conta(int agencia, int numero){ 
			
			Conta.total++;
			this.setAgencia(agencia); 
			this.setNumero(numero);
			
		}
		
		public double getSaldo() {
			return this.saldo;
		}
		
		public void setSaldo(double saldo) {
			this.saldo = saldo;
		}
		
		public int getNumero() {
			return this.numero;
		}
		
		public void setNumero(int numero) {
			if(numero<=0) {
				System.out.println("Não pode criar uma conta com um numero menor ou igual a zero");
				return;
			}else {
				this.numero = numero; //recebe um NOVO numero, ou seja, essse metodo é usado para alterações do atributo numero
			}
			
		}
		
		public int getAgencia() {
			return agencia;
		}
		
		public void setAgencia(int agencia) {
			if(agencia<=0) {
				System.out.println("Não pode colocar uma agencia com numero menor ou igual a zero");
				return;
			}else {
				this.agencia = agencia;
			}
			
		}
		
	
		
		public static int getTotal() { //colocando o static aqui podemos chamar o get a partir da propria classe "Conta" sem usar uma referencia
			//não existe this quando se usa static
			return Conta.total;
		}



		public void depositar(double valor) {
			this.saldo+=valor;
		}
		

		public boolean sacar(double valor) {
			if(this.saldo >=valor) {
				this.saldo-=valor;
				return true;
			}else {
				return false;
			}
		}
		
		public boolean transferir(double valor, Conta destino) {
			if(this.saldo>=valor) {
				this.saldo-=valor;
				destino.depositar(valor);
				return true;
			}else {
				return false;
			}
			
		}
}
