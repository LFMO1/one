
public class AutenticacaoUtil {
	 // voce cria uma classe que contem todos os metodos feitos pela interface, e instacia atributos a partir dele
	private int senha;
	
	public void setSenha(int senha) {
		this.senha=senha;	
	}
	
	public boolean autentica(int senha) {
		if(this.senha==senha) {
			return true;
		}else {
			return false;
		}
		
	}
}
