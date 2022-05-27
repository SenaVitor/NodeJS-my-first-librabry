const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

function pegaArquivo(caminho){
    const encoding = 'utf-8';
    fs.readFile(caminho, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    });
}

pegaArquivo('./arquivos/texto1.md');