import {AutenticacaoController} from '../../controllers/AutenticacaoController.js'
class Login {

  static pegarDados(){
    
    const btnLogin = document.querySelector('.main__btn')
    
    btnLogin.addEventListener('click', async event => {
      const inputEmail = document.querySelector('.main__email').value
      const inputSenha = document.querySelector('.main__password').value
      
      const data = {
        "email": inputEmail,
      	"password": inputSenha
      }
      
      const resposta = await AutenticacaoController.logarUsuario(data)
      if (resposta[0] == undefined) {
        const mainErro = document.querySelector('.main__erro')
        mainErro.classList.remove('display')
      }else{
        window.location = '../homepage/page.html'
      }
    })

    const btnRegistrar = document.querySelector('.main__btn__criar__conta')

    btnRegistrar.addEventListener('click', event => {
      window.location = '../cadastro/cadastro.html'
    })

    const btnEntrar = document.querySelector('.main__btn__entrar')

    btnEntrar.addEventListener('click', event => {
      window.location = '../homepage/page.html'
    })
  }
}

Login.pegarDados()