public class Fluxo {

    public static void main(String[] args) {
        System.out.println("Ini do main");
        try {
        	metodo1();
        } catch(RuntimeException ex) { //ArithmeticException é uma classe e "ex" é uma instacia de um objeto
        	ex.printStackTrace(); //rastro de onde deu erro
        }
        
        System.out.println("Fim do main");
    }

    private static void metodo1() {
        System.out.println("Ini do metodo1");
        metodo2();
        System.out.println("Fim do metodo1");
    }

    private static void metodo2() {
        System.out.println("Ini do metodo2");
        
        throw new MinhaExcecao("deu errado"); //lançando uma exceção	 
         
        //System.out.println("Fim do metodo2");
    }
}
