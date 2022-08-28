function pularLInha(){
    document.write("<br>")
}
function mostra(mensagem){
    document.write(mensagem)
}

function pularLInha2(){
    document.write("<br>")
    document.write("<hr>")
    document.write("<br>")
}

function mostra2(mensagem){
    document.write("<big>"+mensagem+("</big>"))
}

function imc(altura,peso){
    return peso /(altura*altura)
}

function sorteia(n){
    return Math.round(Math.round()*n)
}