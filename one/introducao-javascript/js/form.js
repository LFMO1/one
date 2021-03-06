let botaoAdicionar= document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form=document.querySelector("#form-adiciona")
    var paciente=    ObtemDadosDoPaciente(form)
    
   
    let erro = validaPaciente(paciente)

    if(erro.length>0){
        exibeMensagemDeErro(erro);
        mensagemErro.textContent=erro
        return;
    }

    
    adicionaPacienteNaTabela(paciente)
    

    form.reset()
    let mensagemErro=document.querySelector("#mensagem-erro")
    mensagemErro.innerHTML=""
    
});

function adicionaPacienteNaTabela(paciente){
     
    let pacienteTR=montaTR(paciente)
    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTR);


}

function exibeMensagemDeErro(erro){
    let ul = document.querySelector("#mensagem-erro")
    ul.innerHTML=""

    erro.array.forEach(function(erro) {
        let li=document.createElement("li")
        li.textContent=erro
        ul.appendChild(li)
        
    });

}

function ObtemDadosDoPaciente(form){

    var paciente={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: IMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTR(paciente){
    let pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente")

   
   

    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"));

    return pacienteTR;
}

function montaTD(dado,classe){
    let td= document.createElement("td")
    td.textContent=dado
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente){
   
    let erros= []

    if(paciente.nome.length==0){
        erros.push("insira um nome")
    }
    
    if(!validaPeso(paciente.peso)){
        erros.push("peso invalido")
    }
    
    if(!validaAltura(paciente.altura)){
        erros.push("altura invalida")
    }

    if(paciente.peso.length==0){
        erros.push("insira a gordura ")
    }
    if(paciente.altura.length==0){
        erros.push("insira a gordura ")
    }
    if(paciente.gordura.length==0){
        erros.push("insira a gordura ")
    }

    return erros
}