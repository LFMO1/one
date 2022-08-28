export function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(Validadores[tipoDeInput]){
        Validadores[tipoDeInput](input)
    }

    if(input.validity.vali){

        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    }else{
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}


const tiposDeErro=[
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]


const mensagemDeErro ={
    nome:{
        valueMissing: "o campo nome não pode estar vazio"
    },
    email:{
        valueMissing: "o campo email não pode estar vazio",
        typeMismatch: "o email digitado não é valido"
    },
    senha:{
        valueMissing: "o campo de senha não pode estar vazio",
        patternMismatch: "a senha deve conter de 6 a 12 caracteres, contendo uma letra maiuscula e um numero no minimo e nenhum caracter especial"
    },
    dataNascimento:{
        valueMissing: "o campo de nascimento não pode estar vazio",
        customError: "você dever ser maior de 18 para se cadastrar"
    },
    cpf:{
        valueMissing: "O campo de cpf não pode estar vazio",
        customError: "o CPF digitado não é valido"
    },
    cep:{
        valueMissing: "o campo de cep não pode estar vazio",
        patternMismatch: "o CEP digitado não é valido",
        customError: "não foi possivel buscar o cep"
    },
    logradouro:{
        valueMissing: "o campo de logradouro não pode estar vazio"
    },
    cidade:{
        valueMissing: "o campo de cidade não pode estar vazio"
    },
    estado:{
        valueMissing: "o campo de estado não pode estar vazio"
    },
    preco:{
        valueMissing: "o campo de preco não pode estar vazio"
    }

}

const Validadores ={
    dataNascimento:input => ValidaFormulario(input),
    cpf:input => validaCPF(input),
    cep:input => recuperarCep(input)
}


function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.foreach(erro => {
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}

function ValidaFormulario(input){
    const dataRecebida = new Date(input.value);
    let mensagem= ""
    
    
    if(!maior(dataRecebida)){
        mensagem= "voce dever ser maior de 18 anos para se cadastrar"
    }

   

    input.setCustomValidity(mensagem)
}

function maior(data){
    const dataAtual = new Date()
    const data18 = new Date(data.getUTCFullYear() +18, data.getUTCFullMouth(), data.getUTCFullDate())

    return data18<=dataAtual

}

function validaCPF(input){
    const cpfformatado = input.value.replace(/\D/g, '')

    let mensagem = ''

    if(!checaCPFRepetido(cpfformatado) || !checaEstruturaCPF(cpfformatado)){
        mensagem = 'o CPF digitado não é valido'
    }

    input.setCustomValidity(mensagem)

}

function checaCPFRepetido(cpf){

    const ValoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido =true

    ValoresRepetidos.foreach(valor => {
        if(valor == cpf){
            cpfValido =false
        }
    })

    return cpfValido
}

function checaEstruturaCPF(cpf){
    const multiplicador =10

    return checaDigitoVerificador(cpf, multiplicador)

}

function checaDigitoVerificador(cpf, multiplicador){
    if(multiplicador>=12){
        return  true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador -1).split('')
    const digitoVerificador = cpf.charAt(multiplicador -1)
    for(let i=0; multiplicadorInicial >1; multiplicadorInicial--){
        soma +=cpfSemDigitos[i] *multiplicadorInicial
        i++
    }

    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador +1)
    }

    return false
}

function confirmaDigito(soma){
    return 11 (soma %11)
}

function recuperarCep(input){
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${cep}/json`

    const options={
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type' : 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch &&   input.validity.valueMissing){
        fetch(url, options).then( 
            response => response.json()
        ).then(
            data =>{
                 if(data.erro){
                    input.setCustomValidity("não foi possivel buscar o cep")
                    return
                 }
                 input.setCustomValidity("")
                preencheCamposComCEP(data)
                return
                
            }
            
        )
    }
}


function preencheCamposComCEP(data){
    const logradouro = document.querySelector("[data-tipo='logradouro']")
    const cidade = document.querySelector("[data-tipo='cidade']")
    const estado = document.querySelector("[data-tipo='estado']")

    logradouro.value = logradouro.data
    cidade.value = cidade.localidade
    estado.value = estado.uf
}