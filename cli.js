const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('Lista de links'), resultado);
}

processaTexto(caminho);