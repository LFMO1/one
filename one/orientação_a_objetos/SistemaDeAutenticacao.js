
export class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
        //metodo "in" verifica se tem essa "palavra" dentro desse objeto
        
    }
}