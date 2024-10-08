# Documentação

Esta aplicação é simplesmente para ler arquivos **CNAB** e retornar o calculo de todos os contribuintes. No primeiro momento não há registro de lojas ou de usuários pela api, somente duas rotas sendo uma de enviar o arquivo e outra de buscar os dados de todos os arquivos no banco.


## Configurando Ambiente

A aplicação foi feita utilizando o framework Django juntamente com o Django REST sendo utilizado Python na versão 3.10.4, para o banco de dados foi utilizado SQLite padrão do Django. 

Para configurar o ambiente primeiro clone o repositorio e inicialize um ambiente virtual na pasta onde se encontra as configurações.  

Inicialize rapidamente com esse comando:

	   python -m venv venv
E execute esse: 
  

	   source venv/bin/activate

Após isso baixe todas as dependencias necessarias para rodar a aplicação, algumas como IPDB e outras não são necessarias mas são recomendadas para a depuração do código. 

	   pip install -r requirements.txt

O banco de dados não vem configurado com as migrações portanto temos que gera-las, para isso precisaremos executar dois comandos dentro da pasta do projeto.

	   python manage.py makemigration
	    
Após esse, execute:

	   python manage.py migrate

Seu ambiente está configurado e agora para rodar é necessario utilizar um ultimo comando.

	   python manage.py runserver

Pronto seu servidor está no ar e agora é só utilizar a API do jeito que quiser. 

## Rotas

Existem duas rotas dentro da aplicação, uma para enviar arquivos, outra para pegar o calculo de todas as contas registradas no arquivo CNAB.

### Enviar arquivo

Essa rota irá receber um arquivo CNAB por vez, sendo que poderá interpretar todos os dados dela e lança-los no banco de dano. O retorno dessa rota são todas as transações em formato de JSON.

O tipo de arquivo aceito é um *multipart*

	(POST)   /api/cnab/   

Retorno esperado

    [
	{
		"id": "6a7fb470-a191-4cc8-8123-644d614d5c4c",
		"transaction_type": 3,
		"value": 14200,
		"cpf": "09620676017",
		"card": "4753****3153",
		"transfer_date": "2019-03-01",
		"transfer_hour": "15:34:53",
		"store_owner": "JOÃO MACEDO",
		"store_name": "BAR DO JOÃO"
	},
	{
		"id": "656220f7-cf15-4c8d-b902-1fa8041691e5",
		"transaction_type": 5,
		"value": 13200,
		"cpf": "55641815063",
		"card": "3123****7687",
		"transfer_date": "2019-03-01",
		"transfer_hour": "14:56:07",
		"store_owner": "MARIA JOSEFINA",
		"store_name": "LOJA DO Ó - MATRIZ"
	},
	{
		"id": "fa4481b7-2da2-4285-bb4b-a493406f6e3c",
		"transaction_type": 3,
		"value": 12200,
		"cpf": "84515254073",
		"card": "6777****1313",
		"transfer_date": "2019-03-01",
		"transfer_hour": "17:27:12",
		"store_owner": "MARCOS PEREIRA",
		"store_name": "MERCADO DA AVENIDA"
	}
	]



### Calculo Debito

Essa rota retornará todos os calculos das transações feitas, retornara um JSON em que cada chave é um nome da loja e seu valor é o debito. 

	(GET)   /api/cnab/   

Retorno esperado:

    {
    	"BAR DO JOÃO": -10200,
    	"LOJA DO Ó - MATRIZ": 23000,
    	"MERCADO DA AVENIDA": 48920,
    }
