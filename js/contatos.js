'use strict'

export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch (url)
    const contatos = await response.json()

    return contatos;
}

//PUT - Atualizar Contato
async function atualizarContatos(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type':'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    
    return response.ok
}

//CREATE - Criar Algum Contato
export async function criarContatos(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type':'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    
    return response.ok
}

//DELETE - Deletar Contatos
async function deletarContatos(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE'   
    }
    const response = await fetch(url, options)

    
    return response.ok
}

//Objeto que será Usado
const novoContato = {
"nome":"Matheus Perez",
"celular": "11 9 7070-6464",
"foto": "https://eu.jpg",
"email": "Anjos@gmail.com",
"endereco": "R. Agrimensores, 777",
"cidade": "Céu"
}




