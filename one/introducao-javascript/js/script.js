let titulo = document.querySelector(".titulo");
titulo.textContent="Aparecida nutricionista"


let pacientes=document.querySelectorAll(".paciente")

for(let i=0; i<pacientes.length;i++){
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdaltura= paciente.querySelector(".info-altura");
    let altura=tdaltura.textContent

    let pesoehValido=validaPeso(peso);
    let alturaehValida=validaAltura(altura);

    let tdimc= paciente.querySelector(".info-imc");



    if(!pesoehValido){
        pesoehValido=false;
        tdimc.textContent="peso invalido";
        paciente.classList.add("paciente-invalido")
    }
    if(!alturaehValida){
        alturaehValida=false;
        tdimc.textContent="altura invalida"
        paciente.classList.add("paciente-invalido")
    }
    if(alturaehValida && pesoehValido){
        let imc= IMC(peso,altura);
        tdimc.textContent = imc.toFixed(1);
    
    }
    

}

function validaPeso(peso){
    if(peso>=0 && peso<1000){
        return true
    }else{
        return false
    }

}

function validaAltura(altura){
    if(altura>=0 && altura<3.0){
        return true
    }else{
        return false
    }
}


function IMC(peso, altura){
    let imc=0
    imc=peso/(altura*altura);
    return imc;

}



