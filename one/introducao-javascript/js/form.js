let botaoAdicionar= document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form=document.querySelector("#form-adiciona")
    var paciente=    ObtemDadosDoPaciente(form)
    
    
    let pacienteTR=montaTR(paciente)

    

    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTR);

    form.reset()
    
});

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