
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    // Exibe o popup após 1 segundo
    setTimeout(() => {
        popup.style.display = "flex";
    }, 1000);

    // Fecha o popup ao clicar no botão
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});


let depoimentosIndex = 0;

function mostrarDepoimento(index) {
    const depoimentos = document.querySelectorAll('.depoimento');
    
    // Ocultar todos os depoimentos
    depoimentos.forEach(depoimento => {
        depoimento.classList.remove('ativo');
    });

    // Exibir o depoimento correspondente ao índice
    depoimentos[index].classList.add('ativo');
}

function mudarDepoimento(direction) {
    const depoimentos = document.querySelectorAll('.depoimento');
    depoimentosIndex += direction;

    // Garantir que o índice esteja dentro do intervalo válido
    if (depoimentosIndex < 0) {
        depoimentosIndex = depoimentos.length - 1;
    }
    if (depoimentosIndex >= depoimentos.length) {
        depoimentosIndex = 0;
    }

    mostrarDepoimento(depoimentosIndex);
}

mostrarDepoimento(depoimentosIndex);