import java.util.ArrayList;
import java.util.List;

public class Curso {
	
	private String nome;
	private String instrutor;
	private List<Aula> aulas = new ArrayList<Aula>();
	
	

	public Curso(String nome, String instrutor) {
		this.nome = nome;
		this.instrutor = instrutor;
	}
	
	
	public String getNome() {
		return nome;
	}
	public String getInstrutor() {
		return instrutor;
	}
	
	private List<Aula> getAulas() {
		return  Collections.unmodifiableList(aulas);

	}
	
	public void adiciona(Aula aula) {
		this.aulas.add(aula);
	}

}
