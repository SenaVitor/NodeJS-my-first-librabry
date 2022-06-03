const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaUrls = require('./http-validacao');

const caminho = process.argv; //Pega uma informação informada no terminal (Atualmente está sendo informada no arquivo package.json com o script cli), além do caminho do node e do arquivo atual.

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminho[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), validaUrls(resultado));    
    }else{
        console.log(chalk.yellow('Lista de links'), resultado);
    }
}

processaTexto(caminho);