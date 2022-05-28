const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminho){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(chalk.green(texto));
    }catch(erro){
        trataErro(erro);
    }
}

// function pegaArquivo(caminho){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminho, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro));
// }

// function pegaArquivo(caminho){
//     const encoding = 'utf-8';
//     fs.readFile(caminho, encoding, (erro, texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

pegaArquivo('./arquivos/texto1.md');