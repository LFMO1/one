
public class TestaBoolean {
	public static void main(String[] args) {
		int idade=15;
		int QuantidadePessoas =3;
		boolean acompanhado = QuantidadePessoas >=3; //tipo boolean aceita uma condição dentro dele, nesse exemplo SE QuantidadePessoas for maior ou igual a 3 ele vai dar TRUE
		
		if(idade >=18 || acompanhado) {
			System.out.println("Seja bem vindo");
		}else {
			System.out.println("Você não pode entrar");
		}
	}

}
