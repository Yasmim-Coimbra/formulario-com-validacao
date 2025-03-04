camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
btnEnviar = document.querySelector("button[type='submit']");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    
    for (const input of camposObrigatorios) {
        validarCampos(input);
    };
});

for (const input of camposObrigatorios) {
    input.addEventListener("blur", () => {
        validarCampos(input);
    });
};

function validarCampos(input) {
    if (input.value.trim()) {
        campoValido(input);
    } else {
        campoInvalido(input);
    }
}
function campoInvalido(input) {
    input.classList.remove("valido");
    input.classList.add("invalido");
    input.nextElementSibling.classList.add("ativo");
}
function campoValido(input) {
    input.classList.remove("invalido");
    input.classList.add("valido");
    input.nextElementSibling.classList.remove("ativo");
}