document.addEventListener("DOMContentLoaded", () => {
    const nomeInput = document.getElementById("config-nome");
    const emailInput = document.getElementById("config-email");
    const saveBtn = document.querySelector(".config-save-btn");
    const telegramBtn = document.querySelector(".telegram-btn");
    const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
    if (usuario.nome) nomeInput.value = usuario.nome;
    if (usuario.email) emailInput.value = usuario.email;
    saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const novoUsuario = {
            nome: nomeInput.value.trim(),
            email: emailInput.value.trim(),
        };
        localStorage.setItem("usuario", JSON.stringify(novoUsuario));
        alert("Informações atualizadas com sucesso!");
    });
    telegramBtn.addEventListener("click", () => {
        alert("Aqui você abriria a integração com o Telegram. :)");
    });
});