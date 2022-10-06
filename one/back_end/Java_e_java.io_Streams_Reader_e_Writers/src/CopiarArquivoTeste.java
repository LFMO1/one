


import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.Writer;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;

public class CopiarArquivoTeste {
	
	public static void main(String[] args) throws IOException {
		
		
		InputStream fis = System.in;//new FileInputStream("teste.txt");
		//System.in permite que você escreva no console 
		Reader isr = new InputStreamReader(fis);
		BufferedReader br = new BufferedReader(isr);
		
		
		OutputStream fos = System.out;//new FileOutputStream("teste2.txt");
		//System.out permite que as saidas ocorram no console
		Writer osw = new OutputStreamWriter(fos);
		BufferedWriter buf = new BufferedWriter(osw);
		
		
		
		
		String linha  = br.readLine();
		
		while(linha !=null && !linha.isEmpty() ) {
			buf.write(linha);
			buf.newLine();
			buf.flush(); // toda vez que você der enter ele aparecera no console 
			linha =br.readLine();
		}
	
		br.close();
		buf.close();
	}
}
