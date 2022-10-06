

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

import javax.swing.text.AbstractDocument.BranchElement;

import java.io.BufferedReader;

public class LeituraTeste {
	
	public static void main(String[] args) throws IOException {
		
		InputStream fis = new FileInputStream("teste.txt");
		Reader isr = new InputStreamReader(fis);
		BufferedReader buf = new BufferedReader(isr);
		
		String linha = buf.readLine();
		
		while(linha != null) {
			System.out.println(linha);
			linha = buf.readLine();
		}
		
		buf.close();
	}
}
