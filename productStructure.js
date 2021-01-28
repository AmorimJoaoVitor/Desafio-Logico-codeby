const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  // Código aqui

  let qtd_produtos = products.reduce(function (todosProdutos, nomeProduto) {
    let cor_produto = nomeProduto.split("-")[0];
    let tamanho_produto = nomeProduto.split("-")[1];
    if (todosProdutos[cor_produto]) {
        if (todosProdutos[cor_produto][tamanho_produto]) {
            todosProdutos[cor_produto][tamanho_produto]++
        }else{
            todosProdutos[cor_produto][tamanho_produto] = 1
        }
    }
    else {
        todosProdutos[cor_produto] = {
            [tamanho_produto]:1
        };
    }
    return todosProdutos;
    console.log(cor_produto)
    console.log(tamanho_produto)
}, {});
console.log(qtd_produtos)

return qtd_produtos;

















}
