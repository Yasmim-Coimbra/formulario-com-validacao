camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
mensagemErro = document.querySelectorAll(".erro");

camposObrigatorios.forEach((campo, indexCampo) => {
    campo.addEventListener("blur", () => {
        if (campo.value == "") {
            campoInvalido(campo);
            mensagemErro.forEach((erro, indexErro) => {
                if (indexErro == indexCampo) {
                    erro.classList.add("ativo");
                }
            });
        } else {
            campoValido(campo);
            mensagemErro.forEach((erro, indexErro) => {
                if (indexErro == indexCampo) {
                    erro.classList.remove("ativo");
                }
            });
        }
    });
});

function campoInvalido(campo) {
    campo.classList.remove("valido");
    campo.classList.add("invalido");
}
function campoValido(campo) {
    campo.classList.remove("invalido");
    campo.classList.add("valido");
}