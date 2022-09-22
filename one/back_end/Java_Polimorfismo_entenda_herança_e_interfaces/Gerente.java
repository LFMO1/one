
public class Gerente extends Funcionario implements Autenticavel {
	
	private AutenticacaoUtil util;
	
	public Gerente() {
		this.util =new AutenticacaoUtil();
		
	}
	
	@Override
	public void setSenha(int senha) {
		this.util.setSenha(senha);	
	}
	@Override
	public boolean autentica(int senha) {
		boolean autentica =this.util.autentica(senha); //delegando o metodo	
		return autentica;
	}
	
	
	
	@Override
	public double getBonificacao() { //reescrita, pegar um metodo da classe mãe e reescrever na filha
		return super.getSalario();  //chamando metodo da classe mãe para juntar com esse metodo
	}
	
	
	
	
}
