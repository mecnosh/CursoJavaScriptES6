module.exports = { 
  //arquivo principal
  entry: ['@babel/polyfill', './src/main.js'],
  //ele mostra qual arquivo ele será convertido para versões antes do ES6+
  output: {
    //variavel global que se refere ao diretorio do arquivo webpack.config.js
    path: __dirname + '/public',
    //nome do arquivo que será convertido
    filename:'./bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module:{
    //é obrigatório o uso
    //ele vai dizer como o usuario deve se comportar quando o usuario adicionar novos arquivos js
    //babel é um loader, uma forma de manipular o arquivo e fazer algum tipo de alteração
    rules:[
      {
        //vai buscar se o arquivo termina com .js, e $ significa o final, / / significa expressão regular
        // e o simbolo \ significa qualquer caractere
        test: /\.js$/,
        //exclude para o babel nao execute nenhum arquivo js da pasta node_modules
        //mas apenas execute somente os arquivos do projeto
        exclude: /node_modules/,

        use:{
          loader: 'babel-loader',
        }
      }
    ],
  },
};