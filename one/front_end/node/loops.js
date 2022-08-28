const meuArray=new Array(
    "salvador",
    "são paulo",
    "rio de janeiro"
)

const idadeComprador=19;
const estaAcompanhado= false;
let temPassagemComprada=false;

const podeComprar = idadeComprador>=18 || estaAcompanhado==true;




const destino="salvador"

let i=0
let destinoExiste=false

while(i<3){

    if(meuArray[i]==destino){
        destinoExiste=true
        break;
    }
    i++;
}

console.log("destino existe: "+destinoExiste)