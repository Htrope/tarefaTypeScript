"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarMensagemStatus(status) {
    if (status === "sucesso") {
        return "Dados carregados com sucesso";
    }
    else if (status === "erro") {
        return "Erro ao carregar os dados.";
    }
    else {
        return "Aguarde... carregando dados.";
    }
}
//# sourceMappingURL=questao2.js.map