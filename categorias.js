document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("btn-nova-categoria");
    const modalOverlay = document.getElementById("modal-nova-categoria");
    const cancelModalBtn = document.getElementById("categoria-cancel-btn");

    function abrirModal() {
        lucide.createIcons();
        modalOverlay.classList.add("active");
    }
    function fecharModal() {
        modalOverlay.classList.remove("active");
    }
    openModalBtn.addEventListener("click", abrirModal);
    cancelModalBtn.addEventListener("click", fecharModal);
    
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            fecharModal();
        }
    });

});