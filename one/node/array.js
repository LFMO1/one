const meuArray=new Array(
    "salvador",
    "são paulo",
    "rio de janeiro"
)

meuArray.push("curitiba") //adiciona um valor no meu array
meuArray.splice(1,1) //retira um valor do meu array. O primeiro numero é para saber da onde vai começar a ser deletado
// salvador, são paulo, rio de janeiro. Nesse exemplo colocando o numeor 1, ira começar a deletar apos sãopaulo que ocupa a primeira possição
// o segundo numero é quantos valores seram deletados, nesse caso só havera 1 valor deletado, (são paulo)