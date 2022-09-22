
public class ControleBonificacao {
	
	private double soma;
	
	public void registro(Funcionario f) {
		
		double bont =f.getBonificacao();
		this.soma += bont;
	}
	
	public double getSoma() {
		return soma;
	}

}
