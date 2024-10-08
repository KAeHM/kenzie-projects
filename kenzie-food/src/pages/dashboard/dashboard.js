import { PageController } from "../../controllers/PageController.js";

let data =  await PageController.listarProdutosPrivados()
let ul = document.querySelector('.list')

async function criarCard(data){
    let {id, nome, preco, categoria, descricao, imagem} = data

    let li = document.createElement('li')
    li.classList.add('item__list')
    li.dataset.id = id
    li.dataset.preco = preco
    li.dataset.nome = nome
    li.dataset.categoria = categoria
    li.dataset.descricao = descricao
    li.dataset.imagem = imagem

    li.innerHTML = `
    
    <div class="basic__info__item">
        <img src="${imagem}" alt="">
        <p>${nome}</p>
        <ul class="tags">
            <li class="tag">
                ${categoria}
            </li>
        </ul>
    </div>

    <div class="description__action">
        <p>${descricao}</p>
        <div class="actions">
            <div class="button__action Excluir">
                <img data-button="Excluir" src="../../imgs/lixo.png" alt="">
            </div>
            <div class="button__action Editar">
                <img data-button="Editar" src="../../imgs/edit.png" alt="">
            </div>
        </div>
    </div>
    `
    cardHandler(li)
    ul.appendChild(li)
}

async function carregarPagina(banco=data){
    banco.forEach(element => {
        criarCard(element)
    });
}

function pegarDados(){
    const form = document.querySelector('form')
    let values = [...form]
    let check = ''
    let array = []

    values.forEach(elem => {

        if(elem.checked){
            check = elem.value
        }

        array.push(elem.value)
    })

    return {
            nome: array[0],
            preco: array[5],
            categoria: check,
            descricao: array[1],
            imagem: array[6]
    }
}

function buttonFormHandler(){
    const button = document.getElementById('action__modal')

    button.addEventListener('click', pegarDados)

}

function buttonFecharModelHandler(){
    const button = document.querySelector('.modal__fechar')
    const modal = document.querySelector('.modal__back--1')

    button.addEventListener('click', () =>{
        modal.style.display = 'none'
    })
}

function buttonFecharModelConfirmaçãoHandler(){
    const buttonFechar = document.querySelector('#fechar__model--Excluir')
    const buttonCancelar = document.querySelector('#button__option--2')
    const modal = document.querySelector('.modal__back--2')

    buttonFechar.addEventListener('click', () =>{
        modal.style.display = 'none'
    })

    buttonCancelar.addEventListener('click', () =>{
        modal.style.display = 'none'
    })
}

function buttonEnviarDeleteAPI(id){
    const button = document.querySelector('#button__option--1')
    const modal = document.querySelector('.modal__back--2')

    button.addEventListener('click', async(event) =>{
        let response = await PageController.removerItemDashboard(id)
        console.log(response)
        modal.style.display = 'none'
        location.reload()
    })
}

function buttonAdicionarProdutoHandler(){
    const button = document.querySelector('.buttons--Adicionar')
    const modal = document.querySelector('.modal__back--1')
    const modalTitle = document.querySelector('.modal__title')
    const modalButton = document.querySelector('#action__modal')
    const formName = document.querySelector('#nome')
    const formDescription = document.querySelector('#descricao')
    const formPrice = document.querySelector('#preco')
    const formImg = document.querySelector('#imagem')

    button.addEventListener('click', () =>{
        modal.style.display = 'flex'
        modalTitle.innerText = 'Cadastro de Produtos'
        modalButton.innerText = 'Cadastrar Produto'
        formName.value = ''
        formDescription.value = ''
        formPrice.value = ''
        formImg.value = ''
        buttonCadastrarProduto(modalButton)
    })
}

function buttonCadastrarProduto(button){
    const modal = document.querySelector('.modal__back--1')
    button.addEventListener('click', async(event) =>{
        event.preventDefault()
        let data = pegarDados()
        let response = await PageController.adicionarItemDashboard(data)
        modal.style.display = 'none'
        location.reload()
    })

}

function buttonEnviarEdit(button, id){
    const modal = document.querySelector('.modal__back--1')
    button.addEventListener('click', async(event) =>{
        event.preventDefault()
        let data = pegarDados()
        let response = await PageController.editarItemDashboard(data, id)
        modal.style.display = 'none'
        location.reload()
    })
}

function cardHandler(card){

    card.addEventListener('click', (event) =>{
        let eventC = event.currentTarget
        let elemName = eventC.dataset.nome
        let elemPreco = eventC.dataset.preco
        let elemCateg = eventC.dataset.categoria
        let elemId = eventC.dataset.id
        let elemImg = eventC.dataset.imagem
        let elemDesc = eventC.dataset.descricao


        if(event.target.dataset.button === 'Editar'){
            const modal = document.querySelector('.modal__back--1')
            const modalTitle = document.querySelector('.modal__title')
            const modalButton = document.querySelector('#action__modal')
            const formName = document.querySelector('#nome')
            const formDescription = document.querySelector('#descricao')
            const formPrice = document.querySelector('#preco')
            const formImg = document.querySelector('#imagem')

            modal.style.display = 'flex'
            modalTitle.innerText = 'Edição de Produtos'
            modalButton.innerText = 'Editar Produto'
            formName.value = elemName
            formDescription.value = elemDesc
            formPrice.value = elemPreco
            formImg.value = elemImg
            buttonEnviarEdit(modalButton, elemId)
        }
        else if(event.target.dataset.button === 'Excluir'){
            const modal = document.querySelector('.modal__back--2')
            modal.style.display = 'flex'
            buttonEnviarDeleteAPI(elemId)

        }
        


    })
}

const frutasFiltro = document.querySelector('.filtros--Frutas')
const ulLista = document.querySelector('.list')


frutasFiltro.addEventListener('click', event => {
    ulLista.innerHTML = ''

    let filtroFutra = data.filter(elem => {        
        return elem.categoria == 'Frutas'
    })

    carregarPagina(filtroFutra)
})

const PaoFiltro = document.querySelector('.filtros--Panificadora')

PaoFiltro.addEventListener('click', event => {
    ulLista.innerHTML = ''

    let PaoFiltro = data.filter(elem => {        
        return elem.categoria == 'Panificadora'
    })

    carregarPagina(PaoFiltro)
})

const BebidasFiltro = document.querySelector('.filtros--Bebidas')

BebidasFiltro.addEventListener('click', event => {
    ulLista.innerHTML = ''

    let BebidasFiltro = data.filter(elem => {        
        return elem.categoria == 'Bebidas'
    })

    carregarPagina(BebidasFiltro)
})

const Todos = document.querySelector('.filtros--Todos')

Todos.addEventListener('click', event => {
    ulLista.innerHTML = ''
    carregarPagina()
})

const btnPesquisar = document.querySelector('.input');

btnPesquisar.addEventListener('keyup',(elemento)=>{

    const pesquisa = document.querySelector('.input__pesquisa').value.toLowerCase().trim();

    ulLista.innerHTML = ''
    const filtroPesquisa = data.filter((elem)=>{
        return elem.nome.toLowerCase().includes(pesquisa);
    })
 
    carregarPagina(filtroPesquisa);
})


function btnLogout(){
    const button = document.querySelector('.img__perfil')

    button.addEventListener('click', ()=>{
        window.location = './../homepage/page.html'
    })
}

btnLogout()
carregarPagina()
buttonFormHandler()
buttonFecharModelHandler()
buttonFecharModelConfirmaçãoHandler()
buttonAdicionarProdutoHandler()