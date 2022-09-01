
public class Conta {
		private double saldo;
		private int agencia;
		private int numero;
		private Cliente titular; //Estou criando um atributo do tipo Cliente (nome, cpf, prifissao)
		//Cliente titular = new Cliente(); assim toda vez que eu criar uma conta o atributo "titular" ja cria um cliente, mas nesse caso não é viavel pois um cliente pode criar mais de uma conta
		private static int total; // static faz o atributo ser compartilhado atraves de objetos, ou seja, ele pode participar de todos os objetos criados tempo o mesmo valor que ele tem em outro objeto
		// static é da classe
		
		public Conta(int agencia, int numero){ //construtor no java
			//um construtor obriga o usuario a digitar argumentos na hora de criar o objeto 
			Conta.total++;
			this.setAgencia(agencia); 
			this.setNumero(numero);
			
		}
		
		public double getSaldo() {
			return this.saldo;
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
		
		public Cliente getTitular() {
			return titular;
		}
		
		public void setTitular(Cliente titular) {
			this.titular = titular;
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
