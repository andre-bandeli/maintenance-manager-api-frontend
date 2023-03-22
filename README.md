## MaintenanceManager API Front-end React
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Esta é uma aplicação que está sendo desenvolvida para a Gestão e Planejamento de Manutenções. O frontend foi construído utilizando a biblioteca React, que permite a criação de interfaces de usuário interativas e responsivas. Já o backend foi implementado em Java com Spring Boot, oferecendo uma estrutura robusta para o gerenciamento dos dados e das operações de negócio. O banco de dados utilizado é o MySQL, que fornece confiabilidade e escalabilidade para a aplicação.

## Website Status
![BADGE](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)

- Deploy frontend (host Vercel): [vercel app](https://maintenance-manager-api-frontend.vercel.app/)
- Projeto Back-end: [github](https://github.com/andre-bandeli/maintenance-manager-api-spring-boot)

## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
Os comandos a seguir são realizados em ambiente linux ubuntu 20 (consulte os comandos referentes ao seu sistema operacional).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
node.js: v12.22.9
```
```
jdk: 18
```
```
Maven
```
```
docker:  20.10.17
```

### 🔧 Instalação

Clone o repositório da aplicação de back-end [clique aqui](https://maintenance-manager-api-frontend.vercel.app/) e execute a aplicação. Caso necessário, leia o README para deploy local da aplicação spring boot. 

![BADGE](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

O seguinte resultado é esperado:
![springboot_run](https://user-images.githubusercontent.com/87938869/212789128-3b8f4a5f-73d0-4257-b435-0743ec2b0a39.png)

seguido dos logs
![springboot_logs](https://user-images.githubusercontent.com/87938869/212789258-d7ac1cb6-3907-4583-857c-f48479c605ee.png)

Nesse momento, estamos com nossa aplicação backend (server) disponivel em nosso servidor local. Precisamos agora iniciar nosso projeto frontend (client). Execute os seguintes comandos (caminhe até a pasta root):

```
 npm install
```
```
 npm start
```



## 📛 Page Speed

![imagem](https://user-images.githubusercontent.com/87938869/226801482-67ca8c57-1fe1-4956-95bc-32f50ff7bbc5.png)

## :memo: Regras de Negocio

A aplicação busca resolver os principais desafios encontrados em ambientes industriais para a gestão de manutenção. Para isso, ela oferece soluções específicas para cada uma das partes envolvidas no processo. 

Solicitações de Serviço: Quando alguma máquina para, por exemplo, alguma pessoa é chamada para verificar este problema. Neste momento, uma Solicitação de Serviço nasce. 
Essa SS vai conter as principais informações do problema. 

Ordens de Serviço: Após analise do problema, é estimado um tempo necessário para resolução, algum(a) técnico(a) responsável por reparar, uma data de abertura... O fato é: uma Ordem de Serviço HERDA da classe pai SolicitacaoServiço todas as informações iniciais e incrementa com novas informações. Geralmente uma SS posui relação 1-1 com OS.

Controle de Estoque: gestão de estoque com dados de entrada, saída, saldos mínimos.


## :rocket: Features

- Implementar regra de negócios estoque
- Correção bug JWT token LocalStorage 



## 🛠️ Construído com

* [React JS](https://pt-br.reactjs.org/) - Biblioteca JavaScript
* [Docker](https://www.docker.com/) - Virtualização open source

---

![imgg](https://user-images.githubusercontent.com/87938869/226804472-233a4b8f-6ad2-4225-bba8-0218f7e995f5.jpg)
![img](https://user-images.githubusercontent.com/87938869/226804484-b367ce11-480d-466c-86bb-12df50e88c0f.jpg)
