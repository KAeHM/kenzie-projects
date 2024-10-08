import {AutenticacaoController} from "../../controllers/AutenticacaoController.js"
class Cadastro {

  static pegarDados(){
    
    const btnCadastro = document.querySelector('.main__btn')
    
    btnCadastro.addEventListener('click', async event => {
      const inputNome = document.querySelector('.main__nome').value
      const inputEmail = document.querySelector('.main__email').value
      const inputSenha = document.querySelector('.main__password').value
      
      const data = {
        "name": inputNome,
        "email": inputEmail,
      	"password": inputSenha
      }

      const cadastro = await AutenticacaoController.registroUsuario(data)

      if (cadastro.status == 'Error' || cadastro == 'User Already Exists!') {
        const mainErro = document.querySelector('.main__erro')
        mainErro.classList.remove('display')        
      }else{
        window.location = '../login/login.html'
      }
    })

    const btnLogin = document.querySelector('.main__btn__login')

    btnLogin.addEventListener('click', event => {
      window.location = '../login/login.html'
    })


    const btnEntrar = document.querySelector('.main__btn__entrar')

    btnEntrar.addEventListener('click', event => {
      window.location = '../homepage/page.html'
    })
  }
}

Cadastro.pegarDados()