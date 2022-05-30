const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultados.push({[temp[1]]: temp[2]});
    }
    return arrayResultados;
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminho){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(extraiLinks(texto));
    }catch(erro){
        trataErro(erro);
    }
}

//pegaArquivo('./arquivos/texto1.md');

module.exports = pegaArquivo;