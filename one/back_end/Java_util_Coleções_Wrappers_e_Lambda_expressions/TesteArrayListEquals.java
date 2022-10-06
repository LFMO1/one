package Java_e_java.util_Coleções_Wrappers_e_Lambda_expressions;

import java.util.ArrayList;

import Contas.Conta;
import Contas.ContaCorrente;

public class TesteArrayListEquals {
	public static void main(String[] args) {
		 
		//Generics
		ArrayList<Conta> lista = new ArrayList<Conta >(); //sinais de maior e menor servem para que o arraylist apenas aceite referencias do tipo conta
		
		Conta cc1 = new ContaCorrente(11,11);
		lista.add(cc1); //metodo de adicinar no arraylist
		
		Conta cc2 = new ContaCorrente(22,22);
		lista.add(cc1);
		
		Conta cc3 = new ContaCorrente(33,33);
		lista.add(cc1);
		
		System.out.println(lista.size()); //metodo que mostra a quantidade de objetos dentro do array
		
		Conta ref = lista.get(0);
		System.out.println(ref);
		
		
		for(Conta conta: lista) { //for novo
			System.out.println(conta);
		}
		
	}
}
