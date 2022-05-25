const chalk = require('chalk');
const fs = require('fs');

function pegaArquivo(caminho){
    const encoding = 'utf-8';
    fs.readFile(caminho, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    });
}

pegaArquivo('./arquivos/texto1.md');