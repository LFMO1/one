
public class TesteReferecia {
	public static void main(String[] args) {
		Conta primeiraConta = new Conta(333,333);
		primeiraConta.depositar(300);
		
	
		
		Conta segundaConta = primeiraConta; //vai pegar o mesmo valores que a primeira conta tem
		System.out.println(segundaConta.getSaldo());
		//300
		
		
		Cliente Paulo = new Cliente();
		Paulo.setNome("Paulo Silveira"); //esta pegando o metodo set da classe cliente, dentro dos requisitos do metodo setNome. E não apenas colocando qualquer coisa
		Paulo.setCpf("222.222.222-22");
		Paulo.setProfissao("programador");
		
		Conta ContaDoPaulo = new Conta(111,111);
		
		//ContaDoPaulo.titular = Paulo; maneira errada //Esta associando o atributo "titular" da classe Conta para a variavel "Paulo", Classe titular é do tipo "Cliente" por isso é possivel fazer isso
		
		ContaDoPaulo.setTitular(Paulo); //maneira correa //Esta associando o cliente Paulo a uma conta pelo metodo setTitular()
		
		System.out.println(ContaDoPaulo.getTitular().getNome()); //mostrar o nome do titular da maneira correta
		
		ContaDoPaulo.getTitular().setProfissao("contador"); // maneira correta de mudar um valor usando os metodos
		
		Conta ContaDaMarcela = new Conta(222,222);
		//ContaDaMarcela.titular = new Cliente(); // Esta é uma maneira de associar o atributo "titular" a classe Cliente em uma unica linha
		
		ContaDaMarcela.setTitular(new Cliente()); //maneira correta para associar uma classe em outra em uma unica linha
	}
	

}
