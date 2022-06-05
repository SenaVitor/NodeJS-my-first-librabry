const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url);
                    return `${res.status} - ${res.statusText}`;
            }));
        return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
}

function geraArraysDeUrls(arrayLinks){
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());
}

async function validaUrls(arrayLinks){
    const links = geraArraysDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }));
    return resultados;
}

module.exports = validaUrls;