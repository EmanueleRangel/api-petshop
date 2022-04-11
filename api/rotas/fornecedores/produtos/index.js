const roteador = require('express').Router({ mergeParams: true })
const Tabela = require('./TabelaProdutos')

roteador.get('/', async (requsicao, resposta) => {
    const produtos = await Tabela.listar(requsicao.params.idFornecedor)
    resposta.send(
        JSON.stringify(produtos)
    )
})

module.exports = roteador