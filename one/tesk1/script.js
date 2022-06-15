
function criptografar(){
    let palavra =document.getElementById("palavra")
    let res =document.getElementById("saida")

    res.innerHTML=palavra.value
}


function crip(palavra){
    if(palavra=="a"){
        palavra="oi"
    }
}