const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaStatus(arrayURLs){
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url);
        return res.status;
    }));
    return arrayStatus;
}

function geraArraysDeUrls(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validaUrls(arrayLinks){
    const links = geraArraysDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

module.exports = validaUrls;