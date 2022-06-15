let titulo = document.querySelector(".titulo");
titulo.textContent="Aparecida nutricionista"


let pacientes=document.querySelectorAll(".paciente")

for(let i=0; i<pacientes.length;i++){
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdaltura= paciente.querySelector(".info-altura");
    let altura=tdaltura.textContent

    let pesoehValido=true;
    let alturaehValida=true;

    let tdimc= paciente.querySelector(".info-imc");



    if(peso<=0||peso>=1000){
        pesoehValido=false;
        tdimc.textContent="peso invalido";
        paciente.classList.add("paciente-invalido")
    }
    if(altura<=0 || altura>=3.00){
        alturaehValida=false;
        tdimc.textContent="altura invalida"
        paciente.classList.add("paciente-invalido")
    }
    if(alturaehValida && pesoehValido){
        let imc= IMC(peso,altura);
        tdimc.textContent = imc.toFixed(1);
    
    }
    

}

function IMC(peso, altura){
    let imc=0
    imc=peso/(altura*altura);
    return imc;

}



