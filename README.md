# Marvel Characters API

Esta API permite pesquisar personagens do universo Marvel utilizando a [Marvel Developer API](https://developer.marvel.com/). Com ela, você pode visualizar uma lista inicial de personagens e buscar heróis específicos por nome.

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Funções Principais](#funções-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Licença](#licença)

## Introdução

Este projeto é uma aplicação JavaScript que utiliza a API da Marvel para exibir personagens e informações básicas, como o nome e a imagem do herói. Os usuários podem pesquisar por personagens específicos através de um campo de busca.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

1. **Marvel API Key:** Registre-se no [Marvel Developer Portal](https://developer.marvel.com/) para obter sua chave de API pública e privada.
   
2. **Geração do Hash:** O projeto utiliza um arquivo `geraHash.js` para gerar o hash necessário para autenticar as requisições na API da Marvel. O `createHash` é utilizado para criar o hash com base no timestamp, chave pública e chave privada.

## Como Usar

1. **Exibindo Personagens Iniciais:** Ao iniciar a aplicação, os primeiros 20 personagens são exibidos em ordem alfabética.

2. **Buscando Personagens:** Use o campo de busca para pesquisar personagens pelo nome. A pesquisa é feita em tempo real, exibindo os resultados conforme você digita.

## Funções Principais

### 1. `getPosts(param)`

- **Descrição:** Faz a requisição à API da Marvel com parâmetros específicos.
- **Parâmetros:**
  - `param`: Parâmetros da consulta, como nome do personagem ou ordem de exibição.
- **Retorno:** Retorna os dados dos personagens em formato JSON.

### 2. `herosFromFedd(heros)`

- **Descrição:** Gera o HTML para exibir os heróis iniciais.
- **Parâmetros:**
  - `heros`: Dados recebidos da API com a lista de personagens.
- **Retorno:** Uma string com o HTML para os personagens.

### 3. `herosFromSearch(heros)`

- **Descrição:** Gera o HTML para exibir os heróis buscados, incluindo suas descrições.
- **Parâmetros:**
  - `heros`: Dados dos personagens buscados.
- **Retorno:** Uma string com o HTML para os personagens buscados.

### 4. `earlyFeed()`

- **Descrição:** Exibe a lista inicial de heróis ordenados por nome.
- **Uso:** Chamado na inicialização da aplicação.

### 5. `searchPersonIntoDOM(search)`

- **Descrição:** Faz a busca de personagens com base no valor do campo de busca e exibe os resultados.
- **Parâmetros:**
  - `search`: O nome do personagem que está sendo pesquisado.

### 6. `modifyInputValue(event)`

- **Descrição:** Monitora o campo de input e aciona a busca ou exibe os heróis iniciais se o campo estiver vazio.
- **Parâmetros:**
  - `event`: Evento de input do usuário.

## Tecnologias Utilizadas

- **JavaScript:** Linguagem principal do projeto.
- **HTML/CSS:** Para estrutura e estilização dos componentes.
- **Marvel API:** Para buscar informações sobre os personagens.
- **Fetch API:** Para fazer requisições HTTP.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

### Notas Importantes:
1. **Substitua as chaves da Marvel API:** Lembre-se de configurar corretamente suas chaves na parte da geração de hash (`createHash`).
2. **Segurança:** Nunca exponha suas chaves privadas diretamente no código de produção.
