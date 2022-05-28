const texto = "Eu passo a vida recordando De tudo quanto aí deixei Cachoeiro, cachoeiro Vim pro rio de janeiro P'ra voltar e não voltei! Mas te confesso na saudade As dores que arranjei pra mim Pois todo o pranto destas mágoas Ainda irei juntar nas águas Do teu itapemirim Meu pequeno cachoeiro Vivo só pensando em ti Ai que saudade dessas terras Entre as serras Doce terra onde eu nasci!";


const texto1 = 'são geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)';

function extrair(regex, texto){
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultados.push(temp[0]);
    }
    console.log(arrayResultados);
}

let regex = /C?c?achoeiro*/gm;
extrair(regex, texto); //Imprimir todas as palavras cachoeiro ou Cachoeiro do texto

regex = /https?:\/\/[^\s$.?#].[^\/\s]*/gm; //Imprimir o protocolo e o domínio de todos os links do texto
extrair(regex, texto1);