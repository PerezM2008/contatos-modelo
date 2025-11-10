'use strict'

import {lerContatos} from "./contatos.js"
import { criarContatos } from "./contatos.js"


 function exibirCards (array) {

    const containerCards = document.getElementById('container')
    containerCards.replaceChildren()

    array.forEach(card => {

        const contatoCard = document.createElement('div')
        contatoCard.classList.add('card-contato')

        const perfil = document.createElement('img')
        perfil.src = card.foto


        const h2 = document.createElement('h2')
        h2.textContent = card.nome

        const texto = document.createElement('p')
        texto.textContent = card.celular


        containerCards.appendChild(contatoCard)
        contatoCard.append(perfil, h2, texto)

    });
}


const buttonNovo = document.getElementById('novo-contato')

buttonNovo.addEventListener('click', function(){

    const main = document.querySelector('main') //QUERY SELECTOR - Pega o primeiro class ou imput que estiver de parametro

    main.classList.replace('card-show', 'form-show') // alterna o valor do primeiro parametro que ele achar no main 
});

const buttonCancelar = document.getElementById('cancelar')

buttonCancelar.addEventListener('click', function(){

    const main = document.querySelector('main')

    main.classList.replace('form-show', 'card-show')

});

async function addNovoContato (){

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const celular  = document.getElementById('celular')
    const endereco = document.getElementById('endereco')
    const cidade = document.getElementById('cidade')

     const imagemAdicionada = document.getElementById('preview-input')
     const foto = document.getElementById('foto')

     const buttonSalvar = document.getElementById('salvar')
     buttonSalvar.addEventListener('click', function(){
     
        const novoContato = {
           "nome": nome.value,
           "email": email.value,
           "celular": celular.value,
           "foto": imagemAdicionada.src = URL.createObjectURL(foto.files[0]),
           "endereco": endereco.value,
           "cidade": cidade.value
        }
       
         criarContatos(novoContato);
        
    })

}


addNovoContato()
exibirCards( await lerContatos())