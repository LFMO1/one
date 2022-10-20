import java.util.ArrayList;

public class TestandoListas {

	
public static void main(String[] args) {
	
	String aula1 = "Conhecendo Strings";
	String aula2 = "Modelando Strings";
	String aula3 = "Conhecendo sets";
	
	ArrayList<String> aulas = new ArrayList<>(); //criando um array list que recebe apenas strings
	
	aulas.add(aula1); //metodo de adicionar
	aulas.add(aula2);
	aulas.add(aula3);

	for (String aula : aulas) { //para cada aula dentro de aulas faça o seguinte
		System.out.println("for novo: "+aulas);
	}
	
	for(int i =0; i<aulas.size();i++) { //metodo size é parecido com o length
		System.out.println("For simples: "+aulas.get(i)); //get pega o indice
	}
	
	aulas.forEach(aula ->{ //criando uma função fantasma. No metodo forEach, você passa uma ação, que nesse caso é "aula", e função fantasma com o que esse objeto vai ter que fazer
		System.out.println("forEach metodo: "+aula); //aula recebeu o arrauList aulas
	});
}
}
