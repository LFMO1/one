
public class Cliente implements Autenticavel { //implements é usado para usar uma interface
	private String nome;
	private String cpf;
	private String profissao;
	private int senha;
	
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getProfissao() {
		return profissao;
	}
	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}
	
	
private AutenticacaoUtil util;
	
	public Cliente() {
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
	

}
