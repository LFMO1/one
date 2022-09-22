
public class Administrador extends Funcionario implements Autenticavel{
	//classes abstratas não são obrigadas a usar os metodos abstrados da super classe
	
	
	private AutenticacaoUtil util;
	
	public Administrador() {
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
		return 50;  //chamando metodo da classe mãe para juntar com esse metodo
	}
	
}

