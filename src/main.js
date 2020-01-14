//CLASSES
// // class List {
// //   constructor(){
// //     this.data = [];
// //   }
// //   add(data) {
// //     this.data.push(data);
// //     console.log(this.data);
// //   }
// // }
// // class TodoList extends List{
// //   // constructor(){
// //   //   this.todos = [];
// //   // }
// //   // addTodo() {
// //   //   this.todos.push('Novo todo');
// //   //   console.log(this.todos);
// //   // }
// //   constructor(){
// //     super();
// //     this.usuario = 'Leonardo';
// //   }
// //   mostraUsuario() {
// //     console.log(this.usuario);
// //   }
// // }
// // var MinhaLista =  new TodoList();
// // document.getElementById('novotodo').onclick = function() {
// //   // MinhaLista.addTodo();
// //   MinhaLista.add('Novo todo'); 
// // }
// // MinhaLista.mostraUsuario();
// // class TodoList {
// //   constructor() {
// //     this.todos = [];   
// //   }
// //   static addTodo() {
// //     this.todos.push('Novo todo');
// //     console.log(this.todos);
// //   }
// // }
// // TodoList.addTodo();
// // class matematica {
// //   static soma(a, b) {
// //     return a + b;
// //   }
// // }
// // console.log(matematica.soma(1, 2));

//CONST & LET
// // const usuario = { nome: 'Leonardo' };
// // usuario.nome = 'Cleiton';
// // console.log(usuario);
// // function teste(x) {
// //   let y = 2;
// //   if (x > 5) { 
// //    let y = 4;
// //     console.log(x,y);
// //   }
// // }
// // teste(10);



//OPERAÇÕES EM ARRAY
// const arr = [1, 3, 4, 5, 8, 9];
// //index e a posição de cada elemento
// const newArr = arr.map(function(item, index) {
//   //map percorre o array
//   return item * index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next){
//   //consumir todo o vetor e transformar em uma unica variavel, geralmente em um numero
//   return total + next;
// });
// console.log(sum);
// //total vai ser 0
// //next vai ser 1
// //primeiro vai ser 1 + o next que da 3 === 4
// const filter = arr.filter(function(item){
//   return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//   //find e feito para verificar se existe uma info dentro do array ou se consiguemos encontrar essa info dentro do array
//   return item === 4;
// });
// console.log(find);


// ARROM FUNCTIONS
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);

// //fazendo uma função com const, e retornando ela
// // const teste = () => [1, 2, 3];
// // const teste = () => 'teste';
// // const teste = () => 3;
// //objeto nao funciona se tem apenas a chave, pois ela e o corpo da function
// //entao para resolver se adiciona um parentese ao redor
// // const teste = () => { nome: 'Leonardo' };
// const teste = () => ({ nome: 'Leonardo' });

// console.log(teste());


//VALORES PADRÃO
// function soma(a = 3, b = 6){
//   return a + b;
// }
// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1));
// console.log(soma());

//DESESTRUTURAÇÃO
// const usuario = {
//   nome: 'Leonardo',
//   idade: '17',
//   endereco: {
//     cidade: 'São Leopoldo',
//     estado: 'RS',
//   },
// };
// console.log(usuario);
//3 linhas pra buscar os dados
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// const { nome, idade, endereco:{ cidade, estado } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// console.log(estado);

// function mostraNome(usuario){
//   console.log(usuario.nome);
// }
// function mostraNome({ nome, idade }){
//   console.log(nome, idade);
// }
// mostraNome(usuario);

//OPERADORES REST/SPREAD

//REST
//PEGA O RESTO DE UMA DESESTRUTURAÇÃO OU UMA PASSAGEM DE PARAMETROS COM O ...
// const usuario = {
//   nome: 'Leonardo',
//   idade: 17,
//   empresa: 'Rocketseat'
// };

//usando desestruturação
//... é o rest, ele pega os valores restantes e aplica no console log
// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// aplicando em vetores

// const arr =  [1, 2, 3, 4];

//utilizando desestruturação
// o resto coloca numa variavel c
// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

//parametros de funções

// function soma(a, b, c){
//   return a + b + c;
// }
// function soma(...params){
// return params.reduce((total, next) => total + next);
// }
// function soma(a, b, ...params){
//   return params;
// }

// console.log(soma(1, 3, 4));

//SPREAD

// const arr1 = [1, 2 , 3];
// const arr2 = [4, 5 , 6];

// const arr3 = [ ...arr1, ...arr2 ];

// console.log(arr3);

// const usuario1 = {
//   nome: 'Leonardo',
//   idade: 17,
//   empresa:'Rocketseat'
// };
// utilizando spread para sobrepor(substituindo) o nome
// const usuario2 = { ...usuario1, nome: 'Gabriel' };

// console.log(usuario2);


//TEMPLATE LITERALS

// const nome = "Leonardo";
// const idade = 17;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
//utilizando template literals
// console.log(`Meu nome é ${nome} e tenho ${17} anos.` );

//OBJECT SHORT SYNTAX
//SINTAXE CURTA DE UM OBJETO

// const nome = 'Diego';
// const idade = 17;

// const usuario = {
  // nome: nome,
  // idade: idade,
//   nome,
//   idade,
//   empresa: 'Rocketseat',
// };

// console.log(usuario);

//map é para percorrer o array
//find é pra encontrar uma variavel do array
//filter é para escolher entre as variveis do array
//reduce é quando precisa encontrar um valor cumulativo ou concatenado com base em elementos de todo o array
// webpack e um serviço que permite trabalhar com varios serviços js na aplicação


//CONFIGURANDO WEBPACK



//IMPORT/EXPORT
//importando a function soma do diretorio ./funcoes.js
//ao inves de usar o primeiro import podemos utilizar esse, por causa da export default
// import soma from './soma';
//posso utilizar outro nome nesse import, que irá retornar a mesma coisa
// import somaFunction from './soma';
//e dando um console.log determinando que as variaveis a = 1 e b = 2
//para eu renomear a function sem ser o arquivo com default
//precisa atribuir um "as" dentro do corpo do import
// import { soma as somaFunction, sub } from './funcoes';
//importando a default juntamente com a sub
// import soma, {sub} from './funcoes';
//ao inves de exportar todas as variaveis aqui dentro do corpo
// import {soma, sub, mult} from './funcoes';
// console.log(soma(1, 2));
// console.log(sub(4, 2));
// console.log(mult(8, 2));

// import * as funcoes from './funcoes';
// console.log(funcoes);
// console.log(funcoes.soma(1, 2));
// console.log(funcoes.sub(4, 2));
// console.log(funcoes.mult(8, 2));

//WEBPACK SERVER
// alert('Testando');

// const myPromisse = () => new Promise((resolve, reject) => {
//   setTimeout(() => { resolve('OK')}, 2000);
// });

// myPromisse().then(response =>{
  //responde === resultado
  //.then é o resultado positivo
//   console.log(response);
// }) 
//.catch é os resultados negativos(erros)
// .catch(err => {

// });

//ao inves de trabalhar com .then e .catch toda vez que realizar uma requisição
//podemos fazer quantos await quiser dentro de um async
// async function runPromisse(){
  //a segunda linha só vai executar se a primeira der certo
  // const response = await myPromisse();
  // const response = await myPromisse();
  // console.log(response);
//   console.log(await myPromisse());
//   console.log(await myPromisse());
//   console.log(await myPromisse());

// }
//não pode colocar um await fora de uma function async
//ex:
//await runPromisse();
// runPromisse();

// const runPromisse = async () => {
//   console.log(await myPromisse());
//   console.log(await myPromisse());
//   console.log(await myPromisse());
// };
// runPromisse();

// import axios from 'axios';

// class Api {
  //o async e await utiliza o try e catch para ver os erros
  // static async getUserInfo(username) {
  //   try {
      //vai pegar uma api do github e colocar o username com o template literals = ${username}
      // const response = await axios.get(`https://api.github.com/users/${username}`);
      //todas as funções do axios retornam promisses, por isso da pra trabalhar com async e await
    //   console.log(response);

    // } catch(err) {
      //caso o usuario nao exista ou algum outro erro ele entra no catch  

//       console.warn('Erro na API');
//     }
//   }
// }
//passando o nome de usuario para ser substituido naqule template literals
// Api.getUserInfo('mecnosh');//CERTO
// Api.getUserInfo('mecnosh394324382');//ERRADO

import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }
  //vai registrar os eventos
  registerHandlers() {
    //cada vez que o usuario clicar em submit(no botao), irá adicionar o event
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true ) {
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando...'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  } 

  async  addRepository(event) {
    //preventDefault não vai deixar o form ter aquele funcionamento comum que ele tem no html
    //que é de recarregar a página, enviar um método get/post
    //ele irá prevenir que isso aconteça
    event.preventDefault();

    const repoInput = this.inputEl.value;
    
    if(repoInput.length === 0){
      //return faz com que a execução para por aqui
      //pare de executar
      return 0;
    }

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const { name, html_url, description,owner:{ avatar_url } } = response.data;

      console.log(response);
      
      this.repositories.push({     
        name,
        description,
        avatar_url,
        html_url,
      });
      // console.log(this.repositories);
      //logo após clicar o botao adicionar ele apaga o input
      this.inputEl.value = '';

      this.render();
    } catch (err) {
       alert('O repositório não existe!')
    }
    //tirando o loading da tela
    this.setLoading(false);
  }

  render() {
    //para apagar 
    this.listEl.innerHTML = '';
    //map ele percorre com a intenção de modificar algo
    //forEach apenas percorre o array
    this.repositories.forEach(repo => {
      //será usando a variavel let para ser reconhecida apenas dentro deste escopo
      let imgEl =  document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);  

      this.listEl.appendChild(listItemEl);
    });
  }
}
//instanciando a classe
new App();