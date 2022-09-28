export const clienteService ={
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

const criaCliente = (nome, email)=>{
    return fetch('http://localhost:3000/profile',{
        method: 'POST', //postar algo, envitar
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta=>{
        if(resposta.ok){
            return resposta.body
        }else{
            throw new Error('Não foi possivel criar um cliente')
        }
        
    })
}

 const listaClientes = () =>{
    return fetch('http://localhost:3000/profile')
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }else{
            throw new Error('Não foi possivel listar os clientes')
        }
        
    })
}

const removeCliente =(id)=>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
    .then(resposta=>{
        if(!resposta.ok){
            throw new Error('Não foi possivel apagar o cliente')
        }
    })

}

const detalhaCliente = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta=>{
        if(resposta.ok){
        return resposta.json()
        }else{
            throw new Error('Não foi possivel detalhar o cliente')
        }
    })
}

const atualizaCliente = (id,nome, email)=>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body:JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta=>{
        if(resposta.ok){
        return resposta.json()
        }else{
            throw new Error('Não foi possivel atualizar o cliente')
        }
    })
}






