"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    return pessoa.nome + " tem " + pessoa.idade + " anos e se identifica como " + pessoa.genero + ".";
}
const cabelinho = {
    nome: "Cabelinho",
    idade: 23,
    genero: "masculino"
};
console.log(apresentarPessoa(cabelinho));
//# sourceMappingURL=questao.5.js.map