import java.util.HashSet;
import java.util.Set;

public class TesteSets {
	public static void main(String[] args) {
		Set<String> alunos = new HashSet<>(); //usando o set, voce não tem garantia de ordenação
		
		alunos.add("um");
		alunos.add("dois");
		alunos.add("tres");
		alunos.add("quatro");
		alunos.add("cinco");
		alunos.add("seis");
		alunos.add("um"); //como é repetido ele não aparece novamente no console, apenas uma vez
		
		System.out.println(alunos);
	}

}
