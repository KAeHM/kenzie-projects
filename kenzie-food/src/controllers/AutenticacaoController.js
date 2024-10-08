class AutenticacaoController{

    static baseURL = 'https://api-kenzie-food.herokuapp.com'

    static async logarUsuario(obj){
        let resposta = await fetch(
            this.baseURL + '/auth/login', 
            { 
                method: "POST",
                headers: 
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('Token', res)
                return res
            })
            .catch(error => error)
    
            return resposta
    }

    static async registroUsuario(obj){
        let resposta = await fetch(
            this.baseURL + '/auth/register', 
            { 
                method: "POST",
                headers: 
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
    
            return resposta
    }

}

export {AutenticacaoController}