function geraArraysDeUrls(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validaUrls(arrayLinks){
    return geraArraysDeUrls(arrayLinks);
}

module.exports = validaUrls;