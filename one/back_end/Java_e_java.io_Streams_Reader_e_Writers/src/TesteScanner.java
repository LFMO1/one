import java.io.File;
import java.util.Arrays;
import java.util.Locale;
import java.util.Scanner;

public class TesteScanner {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(new File("contas.csv"));
		
		while(sc.hasNextLine()) {
			String linha = 	sc.nextLine();
			System.out.println(linha);
			
			
			Scanner linhaScanner = new Scanner(linha);
			linhaScanner.useLocale(Locale.US); // definindo o tipo de double, assim não tera confilito na hora de separar o numeros decimais com ponto 
			linhaScanner.useDelimiter(",");
			
			String valor1 = linhaScanner.next();
			int valor2 = linhaScanner.nextInt();
			int valor3 = linhaScanner.nextInt();
			String valor4 = linhaScanner.next();
			Double valor5 = linhaScanner.nextDouble();
			
			String valorFormatado = String.format(new Locale("pt","BR"), "%s %d %d %s %f", valor1, valor2, valor3, valor4, valor5); //evitando concatenação 
			//segundo e terceiro valores são int, então usa %d. O ultimo valor é double e usa %f
			System.out.println(valorFormatado);
			linhaScanner.close();
			
			
			//String[] valores = linha.split(",");
			//System.out.println(Arrays.toString(valores));
		}
		
		
		sc.close();
	}

}
