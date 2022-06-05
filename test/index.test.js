const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/home/vitor/Documentos/cursos/node_primeira_biblioteca/test/arquivos/texto1.md');
        expect(resultado).toEqual(arrayResult);
    })
})