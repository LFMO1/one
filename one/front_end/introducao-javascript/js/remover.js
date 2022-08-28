let pacientes = document.querySelectorAll(".paciente")

let tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
 
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function() {
        event.target.parentNode.remove()
    }, 500);
    
});



// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove() //this é a atrelação a variavel mais proxima (no caso paciente)

//     })
// })