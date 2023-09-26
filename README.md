# API DIANPE
Nesse arquivo você encontrará a documentação da API do projeto DIANPE e um breve tutorial de como utiliza-lá. 

* Status: Concluído ✅
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

* **[Clique aqui para baixar a collection](https://drive.google.com/file/d/1JHn7-LJa_jYvGjvZxc_rQI5AaQDBSrWL/view?usp=sharing)**


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
  * `GET: /escolas/pesquisar?query=valor` -> Retorna escolas que batem de forma total ou parcial com o valor informado no parâmetro "query". Exemplo:
    ```
    query=a
    ```

    ```
    [
      {
        "ID": 1,
        "NOME_INSTITUICAO": "Escola de Tecnologia Digital TecnoAvanço"
      },
      {
        "ID": 2,
        "NOME_INSTITUICAO": "Instituto de Ciência da Computação FuturoTech"
      }
    ]
    ```

* Rota de **CURSOS**
  * `GET: /cursos/` -> Retorna todos os cursos cadastrados no banco de dados ordenados por categoria do curso.
    ```
    {
      "CURSOS_POR_CATEGORIA": [
        {
          "NOME_CATEGORIA_F": "Tecnologia da Informação",
          "CURSOS": [
            {
              "ID": 1,
              "NOME": "Técnico em Desenvolvimento de Software",
              "CATEGORIA_SLUG": "tecnologia-da-informacao",
              "CURSO_SLUG": "desenvolvimento-de-software",
              "IMG_URL": "https://www.fotos.com/fotodocursoA"
            },
            {
              "ID": 2,
              "NOME": "Técnico em Suporte de Informática",
              "CATEGORIA_SLUG": "tecnologia-da-informacao",
              "CURSO_SLUG": "suporte-de-informatica",
              "IMG_URL": "https://www.fotos.com/fotodocursoB"
            }
          ]
        }
      ]
    }
    ```
  * `GET: /cursos/:id` -> Retorna todos os dados de um curso e as escolas que oferecem de acordo com o id informado na URL. Exemplo:
    ```
    {
      "CURSO": {
          "ID": 4,
          "NOME": "Curso de Segurança da Informação",
          "ID_CATEGORIA_CURSO": 1,
          "NOME_CATEGORIA": "Tecnologia da Informação",
          "CATEGORIA_SLUG": "tecnologia-da-informacao",
          "CURSO_SLUG": "seguranca-da-informacao",
          "IMG_URL": "https://www.fotos.com/fotodocursoA",
          "DESCRICAO": "Lorem Ipsum Dolor"
      },
      "ESCOLAS": [
        {
          "ID": 1,
          "NOME_INSTITUICAO": "Escola A",
          "IMG_LOGO_URL": "https://www.fotos.com/fotodaescolaA",
          "INSTITUICAO_SLUG": "escola-a"
        }
      ]
    }
    ```
  * `GET: /cursos/pesquisar?query=valor` -> Retorna cursos que batem de forma total ou parcial com o valor informado no parâmetro "query". Exemplo:
    ```
    query=dese
    ```

    ```
    [
      {
        "ID": 1,
        "NOME": "Técnico em Desenvolvimento de Software"
      },
      {
        "ID": 25,
        "NOME": "Curso de Desenho Artístico"
      }
    ]
    ```