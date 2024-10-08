class PageController{

    static baseURL = 'https://api-kenzie-food.herokuapp.com'

    static async listarProdutos(){
        let resposta = await fetch(
            this.baseURL + '/products', 
            {
                method: "GET",
                headers: 
                {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async listarProdutosPrivados(){
        let resposta = await fetch(
            this.baseURL + '/my/products', 
            {
                method: "GET",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                }
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async pegarItensCarrinho(){
        let resposta = await fetch(
            this.baseURL + '/cart', 
            {
                method: "GET",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                }
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async adicionarItemCarrinho(obj){
        let resposta = await fetch(
            this.baseURL + '/cart/add', 
            {
                method: "POST",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async removerItemCarrinho(id){
        let resposta = await fetch(
            this.baseURL + '/cart/remove/' + id, 
            {
                method: "DELETE",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                }
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async adicionarItemDashboard(obj){
        let resposta = await fetch(
            this.baseURL + '/my/products', 
            {
                method: "POST",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async editarItemDashboard(obj, id){
        let resposta = await fetch(
            this.baseURL + '/my/products/' + id, 
            {
                method: "PATCH",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }

    static async removerItemDashboard(id){
        let resposta = await fetch(
            this.baseURL + '/my/products/' + id, 
            {
                method: "DELETE",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                }
            })
            .then(res => res.json())
            .then(res => res)
            .catch(error => console.log(error))

            return resposta
    }
}

export {PageController}