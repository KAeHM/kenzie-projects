import {
    PageController
} from "../../controllers/PageController.js"




let arraycarrinho = [];
let string = localStorage.getItem("carrinho")
if(typeof(string)!="object"){
    string = string.split(",")
    arraycarrinho = string
    
}



let produtos = await PageController.listarProdutos()
let esquerda = document.getElementById("esquerda")






async function listagem(array) {
   esquerda.innerHTML=""
    array.forEach((element) => {
        let card = document.createElement("div")
        card.classList = "card"
        let imagemdecard = document.createElement("img")
        imagemdecard.src = element.imagem
        imagemdecard.classList = "imagemdecard"
        let divinformacoes = document.createElement("div")
        divinformacoes.classList = "divinformacoes"
        let titulo = document.createElement("h2")
        titulo.innerText = element.nome
        titulo.classList = "titulo"
        let descricao = document.createElement("p")
        descricao.classList = "descricao"
        descricao.innerText = element.descricao
        let categorias = document.createElement("p")
        categorias.classList = "cardcategorias"
        categorias.innerText = element.categoria
        let precoebotao = document.createElement("div")
        precoebotao.innerHTML = `<p class = preco>R$ ${element.preco}</p><div class= "adicionarcarrinho" id = ${element.id}><img class="imgcarrinho"  id ="${element.id}" src="../../imgs/carrinho.png" alt=""></div>`
        precoebotao.classList = "precoebotao"
        divinformacoes.appendChild(titulo)
        divinformacoes.appendChild(descricao)
        divinformacoes.appendChild(categorias)
        divinformacoes.appendChild(precoebotao)
        card.appendChild(imagemdecard)
        card.appendChild(divinformacoes)
        esquerda.appendChild(card)
        precoebotao.addEventListener("click", (event) => {
            let id = event.target.id
            arraycarrinho.push(id)
            rederizarcarrinho()
            verificacarrinho()
        })
    });
    
}



listagem(produtos)
let direita = document.getElementById("direita")
let divcarrinho = document.createElement("div")
divcarrinho.id = "divcarrinho"
let dhcarrinho = document.createElement("div")
let nomedocarrinho = document.createElement("div")
nomedocarrinho.innerHTML = `<img id ="iconecarrinho" src="../../imgs/carrinho2.png" alt=""><p id="ncarrinho">Carrinho</p>`
dhcarrinho.appendChild(nomedocarrinho)
dhcarrinho.id = "dhcarrinho"
direita.appendChild(dhcarrinho)
direita.appendChild(divcarrinho)
let precoetotal= document.createElement("div")
precoetotal.id = "precoetotal"
let divsepara1 = document.createElement("div")
divsepara1.classList = "separador"
let quantidade = document.createElement("p")
quantidade.innerText= "Quantidade"
quantidade.id = "quantidade"
quantidade.classList = "quantidadeevalor"
let quantidade2 = document.createElement("p")
quantidade2.classList = "quantidadeetotal"
divsepara1.appendChild(quantidade)
divsepara1.appendChild(quantidade2)
precoetotal.appendChild(divsepara1)
direita.appendChild(precoetotal)
let divsepara2 = document.createElement("div")
  divsepara2.classList="separador"
  let textototal = document.createElement("p")
  textototal.classList= "quantidadeevalor"
  textototal.innerText = "Total"
  let dinheirototal = document.createElement("p")
  dinheirototal.classList = "quantidadeetotal"
  divsepara2.appendChild(textototal)
  divsepara2.appendChild(dinheirototal)
precoetotal.appendChild(divsepara2)


rederizarcarrinho()


async function verificacarrinho() {

    if (arraycarrinho.length === 0) {
        let imagemcarrinho2 = document.createElement("img")
        imagemcarrinho2.src = "../../imgs/sacola.png"
        imagemcarrinho2.id = "sacola"
        let texto = document.createElement("p")
        texto.id = "texto"
        texto.innerText = "Por enquanto não temos produtos no carrinho"
        divcarrinho.appendChild(imagemcarrinho2)
        divcarrinho.appendChild(texto)
        localStorage.removeItem("carrinho")
        
        precoetotal.style.display ="none"
        console.log(arraycarrinho)
    }
    else{
        await rederizarcarrinho()
        precoetotal.style.display ="flex"
    }
    
}





verificacarrinho()

async function rederizarcarrinho() {
    divcarrinho.innerHTML = ""
    quantidade2.innerText= arraycarrinho.length
    
    
    
    let array = []
    arraycarrinho.forEach((elem)=>{
        for(let i=0;i<produtos.length;i++){
            if(produtos[i].id===elem){
                array.push(produtos[i])
            }
        }
    })
   
    let valor = 0
    for(let i = 0; i< array.length;i++){
         valor += array[i].preco
         
        
    }
    
        dinheirototal.innerText= `R$${valor}`
    arraycarrinho.forEach((elem) => {
        let atual = produtos.filter((elem2) => {
            return elem2.id === elem
        })
    
        let cardcarrinho = document.createElement("div")
        cardcarrinho.innerHTML = ""
        cardcarrinho.classList = "cardcarrinho2"
        let imagemdocarrinho = document.createElement("img")
        imagemdocarrinho.src = atual[0].imagem
        imagemdocarrinho.classList = "imagemdocarrinho"
        let informacoescarrinho = document.createElement("div")
        let titulocarrinho = document.createElement("p")
        titulocarrinho.classList = "titulocarrinho"
        titulocarrinho.innerText = atual[0].nome
        let categoriacarrinho = document.createElement("p")
        categoriacarrinho.classList = "catcarrinho"
        categoriacarrinho.innerText = atual[0].categoria
        let precocarrinho = document.createElement("p")
        precocarrinho.innerText = `R$${atual[0].preco}`
        
        precocarrinho.classList = "precocarrinho"
        let lixeira = document.createElement("div")
        lixeira.id = elem
        lixeira.classList = "lixeira"
        
        lixeira.innerHTML = `<img id = "${elem}" width= "30px" src="../../imgs/lixeira.png" alt="">`
        cardcarrinho.appendChild(imagemdocarrinho)
        cardcarrinho.appendChild(informacoescarrinho)
        informacoescarrinho.appendChild(titulocarrinho)
        informacoescarrinho.appendChild(categoriacarrinho)
        informacoescarrinho.appendChild(precocarrinho)
        cardcarrinho.appendChild(lixeira)
        divcarrinho.appendChild(cardcarrinho)
        lixeira.addEventListener("click", (event) => {
            
            for (let i = 0; i < arraycarrinho.length; i++) {
                if (arraycarrinho[i] === event.target.id) {
                    arraycarrinho.splice(i, 1)
                    break
                }
            }
            
            rederizarcarrinho()
            verificacarrinho()

          
        })
        localStorage.setItem("carrinho", arraycarrinho)
        console.log(localStorage.getItem("carrinho")) 
       
    })
}
addEventListener

let todos=produtos.filter((elem)=>{
    return elem.categoria
    
})

let bebidas=produtos.filter((elem)=>{
    return elem.categoria ==='Bebidas';
    
})


let frutas=produtos.filter((elem)=>{
    return elem.categoria ==='Frutas';
    
})


let panificadora=produtos.filter((elem)=>{
    return elem.categoria ==='Panificadora';
    
})
/*
let filtroPesquisa=produtos.filter((elem)=>{
    return elem.titulo === btnPesquisar
})*/


const btnFrutas=document.getElementById('botao-frutas');
btnFrutas.addEventListener('click',()=>{
       listagem(frutas);
})



const btnPanificadora=document.getElementById('botao-panificadora');
btnPanificadora.addEventListener('click',()=>{
       listagem(panificadora);
})



const btnBebidas=document.getElementById('botao-bebidas');
btnBebidas.addEventListener('click',()=>{
       listagem(bebidas);
})

const btnTodos=document.getElementById('botao-todos');
btnTodos.addEventListener('click',()=>{
       listagem(todos);
});

const btnPesquisar=document.querySelector('.pesquisa');
btnPesquisar.addEventListener('keyup',(elemento)=>{

    
    const pesquisa=document.querySelector('.pesquisa').value.toLowerCase().trim();

    const filtroPesquisa = produtos.filter((elem)=>{
        return elem.nome.toLowerCase().includes(pesquisa);
    })
 
      listagem(filtroPesquisa);
})




// Dar outro append para o divcarrinho no modal
const abrirModal = document.querySelector('.dhcarrinho')
const modalBody = document.querySelector('.modal__body')

const buttonClose = document.createElement('button')
buttonClose.classList.add('btn__close__modal')
buttonClose.innerText = "X"

const modal = document.querySelector("#dv-modal")

abrirModal.addEventListener('click', event => {
    event.preventDefault()
    dhcarrinho.appendChild(buttonClose)    
    modalBody.appendChild(dhcarrinho)
    modalBody.appendChild(divcarrinho);

    modal.classList.remove('display')
})

buttonClose.addEventListener('click', event => {

    dhcarrinho.removeChild(buttonClose)
    direita.appendChild(dhcarrinho)
    direita.appendChild(divcarrinho)
    modal.classList.add('display')

    divsepara1.appendChild(quantidade)
    divsepara1.appendChild(quantidade2)
    precoetotal.appendChild(divsepara1)
    direita.appendChild(precoetotal)
})

const tbnMinhaArea = document.querySelector('.btn__minha__area')

tbnMinhaArea.addEventListener('click', event => {
    const token = localStorage.getItem('Token')
    if (token) {
        window.location = "../dashboard/dashboard.html"
    }else{
        const pArea = document.querySelector('.p__are')
        pArea.classList.remove('display__are')
        setTimeout(() => {
            window.location = "../cadastro/cadastro.html"
        }, 1500)
    }
})
