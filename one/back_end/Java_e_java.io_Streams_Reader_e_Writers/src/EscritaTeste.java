


import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.io.BufferedWriter;

public class EscritaTeste {
	
	public static void main(String[] args) throws IOException {
		
		OutputStream fos = new FileOutputStream("teste2.txt");
		Writer osw = new OutputStreamWriter(fos);
		BufferedWriter buf = new BufferedWriter(osw);
		
		
		buf.write("lorem lorem lorem lorem lorem lorem");
		buf.newLine();
		buf.newLine();
		buf.write("jlkfajsldjfalksdjflkasdjfkla");
		
	
		
		buf.close();
	}
}
