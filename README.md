# API DIANPE
Nesse arquivo você encontrará a documentação da API do projeto DIANPE e um breve tutorial de como utiliza-lá. 

* Status: Em desenvolvimento 🚧
* Ambiente de produção: https://api-dianpe.onrender.com
---------------
## ⚙ Instalação e configuração
1) Clone o repositório
    ```
    $ git clone https://github.com/diogofrr/api_dianpe.git
    ```
2) Instale as dependências
    ```
    $ npm install
    ```
3)  Crie um arquivo `.env` na raiz do projeto
4)  Configure as seguintes variáveis de ambiente

    * **`process.env.PORT:`** Coloque a porta em que você deseja rodar o projeto
    * **`process.env.APP_URL:`** Coloque uma única URL para acessar a API ou * para que qualquer URL possa acessar.
5) Inicie o projeto localmente
    ```
    $ npm run dev
    ```

## 🛣 Rotas

* Rota de **ESCOLAS**
  * `GET: /escolas/` -> Retorna uma lista com alguns necessários de todas as escolas cadastradas. Exemplo: 
    ```
    {
      "ESCOLAS": [
          {
              "ID": 1,
              "NOME_INSTITUICAO": "Escola A",
              "SITE": "https://www.escolaA.com.br/",
              "IMG_LOGO_URL": "https://www.fotos.com/fotodaescolaA",
              "INSTITUICAO_SLUG": "escola-a"
          },
          {
              "ID": 2,
              "NOME_INSTITUICAO": "Escola B",
              "SITE": "https://escolaB.com.br/",
              "IMG_LOGO_URL": "https://fotos.com/fotodaescolaB",
              "INSTITUICAO_SLUG": "escola-b"
          },
        ...
      ]
    }
    ```
  * `GET: /escolas/:id` -> Retorna todos os dados da escola e os cursos que ela oferece de acordo com o id informado na URL. Exemplo:
    ```
    {
      "ID": 1,
      "NOME_INSTITUICAO": "Escola A",
      "TELEFONE": "11111111111",
      "SITE": "https://www.escolaA.com.br/",
      "INSTITUICAO_SLUG": "escola-a",
      "IMG_LOGO_URL": "https://www.fotos.com/fotodaescolaA",
      "EMAIL": "escolaA@escola.edu.br",
      "RUA": "Rua A",
      "BAIRRO": "Uberlândia",
      "NUM": 12,
      "COMPLEMENTO": null,
      "CIDADE": "Uberlândia",
      "UF": "MG",
      "CURSOS_POR_CATEGORIA": {}
    }
    ```
* Rota de **CURSOS**
  * `GET: /cursos/` -> Retorna todos os cursos cadastrados no banco de dados ordenados por categoria do curso.
    ```
    {
      "CURSOS_POR_CATEGORIA": {
          "tecnologia-da-informacao": {
            "NOME_CATEGORIA_F": "Alfabeto",
            "CURSOS": [
              {
                "ID": 1,
                "NOME": "Curso A",
                "CATEGORIA_SLUG": "alfabeto",
                "CURSO_SLUG": "curso-a",
                "IMG_URL": "https://www.fotos.com/cursoa"
              },
              ...
            ]
          },
          "negocios-e-administracao": {
            "NOME_CATEGORIA_F": "Negócios e Administração",
            "CURSOS": [...]
          },
          "saude-e-medicina": {
            "NOME_CATEGORIA_F": "Saúde e Medicina",
            "CURSOS": [...]
          },
          "artes-e-design": {
            "NOME_CATEGORIA_F": "Artes e Design",
            "CURSOS":  [...]
          },
          "educacao": {
            "NOME_CATEGORIA_F": "Educação",
            "CURSOS":  [...]
          }
      }
    }
    ```