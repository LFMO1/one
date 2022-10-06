



import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintStream;
import java.io.BufferedWriter;

public class PrintStreamPrintWriterTeste {
	
	public static void main(String[] args) throws IOException {
		
		//OutputStream fos = new FileOutputStream("teste2.txt");
		//Writer osw = new OutputStreamWriter(fos);
		//BufferedWriter buf = new BufferedWriter(osw);
		
		//ileWriter fw = new FileWriter("teste.txt");
		//BufferedWriter buf = new BufferedWriter(fw);
		
		PrintStream ps = new PrintStream("teste.txt");
		
		ps.println("lorem lorem lorem lorem lorem lorem");
		ps.println();
		ps.println("jlkfajsldjfalksdjflkasdjfkla");
		
		
		ps.close();
	}
}
