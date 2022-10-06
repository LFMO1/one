


import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.io.BufferedWriter;

public class FileWriterTeste {
	
	public static void main(String[] args) throws IOException {
		
		//OutputStream fos = new FileOutputStream("teste2.txt");
		//Writer osw = new OutputStreamWriter(fos);
		//BufferedWriter buf = new BufferedWriter(osw);
		
		FileWriter fw = new FileWriter("teste.txt");
		BufferedWriter buf = new BufferedWriter(fw);
		
		
		fw.write("lorem lorem lorem lorem lorem lorem");
		fw.write(System.lineSeparator()); // mesma função do "\n"
		fw.write(System.lineSeparator()); // separador de linha
		fw.write("jlkfajsldjfalksdjflkasdjfkla");
		
	
		
		fw.close();
	}
}
