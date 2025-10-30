document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("btn-nova-meta");
    const modalOverlay = document.getElementById("modal-overlay");
    const closeModalBtn = document.getElementById("modal-close-btn");
    const cancelModalBtn = document.getElementById("modal-cancel-btn");

    function abrirModal() {
        modalOverlay.classList.add("active");
    }

    function fecharModal() {
        modalOverlay.classList.remove("active");
    }

    openModalBtn.addEventListener("click", abrirModal);
    closeModalBtn.addEventListener("click", fecharModal);
    cancelModalBtn.addEventListener("click", fecharModal);
    
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            fecharModal();
        }
    });

});