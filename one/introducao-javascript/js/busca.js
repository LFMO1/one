let botao = document.querySelector("#busca-paciente")

botao.addEventListener("click",function(){

    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status==200){
            erroAjax.classList.add("invisivel")
            let resposta = xhr.responseText
            let paciente = JSON.parse(resposta)
    
            paciente.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente)
    
                
            });
        }else{
            
            erroAjax.classList.remove("invisivel")
        }

       

    })
    xhr.send()
})