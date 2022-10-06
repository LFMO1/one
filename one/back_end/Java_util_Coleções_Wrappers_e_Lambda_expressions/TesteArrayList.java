package Java_e_java.util_Coleções_Wrappers_e_Lambda_expressions;

import java.util.ArrayList;

import Contas.Conta;
import Contas.ContaCorrente;

public class TesteArrayList {
	public static void main(String[] args) {
		 
		//Generics
		ArrayList<Conta> lista = new ArrayList<Conta >(); //sinais de maior e menor servem para que o arraylist apenas aceite referencias do tipo conta
		
		Conta cc1 = new ContaCorrente(11,11);
		lista.add(cc1); //metodo de adicinar no arraylist
		
		Conta cc2 = new ContaCorrente(22,22);
		lista.add(cc2);
		
		Conta cc3 = new ContaCorrente(22,22);
		boolean existe = lista.contains(cc3);
		
		System.out.println("Já existe? "+existe);
		
	
		
		System.out.println(lista.size()); //metodo que mostra a quantidade de objetos dentro do array
		
		
		for(Conta conta: lista) { //for novo
			System.out.println(conta);
		}
		
	}
}
