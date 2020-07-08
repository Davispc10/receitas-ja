<h1 align="center">
<img src="https://i.imgur.com/k7PQhJq.png" alt="ReceitasJa" width="400" align="center">
</h1>

<h3 align="center"> 🚀 ReceitasJá: Api para busca de receitas...</h3>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Davispc10/receitas-ja">
	
  <a href="https://www.linkedin.com/in/david-azeredo/">
    <img alt="Made by David Azeredo" src="https://img.shields.io/badge/made%20by-DavidAzeredo-%2304D361">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Ferramentas

- 💹 **Node Js** — Plataforma que permite utilizar javascript para criar aplicações do lado do servidor(backend):
  - Axios;
  - Framework express;
  - Eslint para padronização do código;
  - Yup para validação;
  - Jest para testes;
  - Typescript.

## Sobre:

<p>Para facilitar a busca de receitas na internet foi criado uma API que facilita essa busca.</p>

<p>A api tem uma url que você pode usar para buscar receitas através 
de ingredientes passados como parâmetro, sendo até 3 ingredientes.
É buscada numa api externa Recipe Puppy e retorna as receitas encontradas
que contenham esses ingredientes.</p>

<p>Na resposta vem a lista de ingredientes e as receitas com o nome da receita, os ingredientes utilizados, o link da fonte e um link de um gif
sobre a receita buscado no site GIPHY.</p>

``` bash
# No projeto pode ser utilizado a url:
http://localhost:3334/recipes

# E pode passar os ingredientes no parâmetro 'i'
http://localhost:3334/recipes/?i=tomato, eggs
```

### Configuração - Backend

Para rodar o projeto, voce precisa do yarn, node e git instalados.
```bash
# Após clonar o projeto na sua máquina e as ferramentas instaladas,
# vá a pasta do projeto
$ cd receitas-ja/

# Instale as dependências
$ yarn install

# No projeto é necessário um arquivo variáveis ambiente para utilização 
# do serviço GYPHY e url base do projeto. Então copie o arquivo .env.example
# e cole como '.env'. Após criado o arquivo, terá que colocar uma chave de 
# api para buscar os gifs. Para facilitar pode usar a minha chave:
API_KEY=slLZCvaBOAo8I6XEiDQ27bJ1pC1k3cSa

# Para iniciar o servidor basta executar
$ yarn dev
```

### Testes - Backend

Para rodar os testes é só executar:
```bash
yarn test
```

## Licença

Esse projeto é licensiado pela MIT License - Veja a página da [licença](https://opensource.org/licenses/MIT) para detalhes
