camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
btnEnviar = document.querySelector("button");
mensagemErro = document.querySelectorAll(".erro");

btnEnviar.addEventListener("click", function validarComBotao() {
    camposObrigatorios.forEach((campo, indexCampo) => {
        validarCampos(campo, indexCampo);
        if (!campo.classList.contains("valido")) {
            btnEnviar.setAttribute("type", "button");
        } else if(!campo.classList.contains("invalido")) {
            btnEnviar.setAttribute("type", "submit");
        }
    });
})

camposObrigatorios.forEach((campo, indexCampo) => {
    campo.addEventListener("blur", () => {
        validarCampos(campo, indexCampo);
    });
});

function validarCampos(campo, indexCampo) {
    if (campo.value.trim() == "") {
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
}

function campoInvalido(campo) {
    campo.classList.remove("valido");
    campo.classList.add("invalido");
}
function campoValido(campo) {
    campo.classList.remove("invalido");
    campo.classList.add("valido");
}