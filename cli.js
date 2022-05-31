const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv; //Pega uma informação informada no terminal (Atualmente está sendo informada no arquivo package.json com o script cli), além do caminho do node e do arquivo atual.

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('Lista de links'), resultado);
}

processaTexto(caminho);