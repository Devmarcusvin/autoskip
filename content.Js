// Marcus vinicius paz
console.log("AutoSkip carregado no Prime Video!");

// Textos que identificam o botão.
const termosDeSkip = [
    "pular abertura",
    "pular introdução",
    "skip intro",
    "ignorar abertura",
];

// Guarda se a abertura atual já foi pulada.
let aberturaJaPulada = false;


function procurarBotaoPular() {

    // Se já pulou, não executa novamente.
    if (aberturaJaPulada) {
        return;
    }

    const botoes = document.querySelectorAll("button");

    for (const botao of botoes) {

        const texto = botao.innerText
            .trim()
            .toLowerCase();

        const encontrou = termosDeSkip.some(
            termo => texto.includes(termo)
        );

        if (encontrou) {

            // Marca antes do clique para evitar cliques repetidos.
            aberturaJaPulada = true;

            console.log("AutoSkip encontrou:", texto);

            botao.click();

            console.log("AutoSkip clicou automaticamente!");

            return;
        }
    }
}


// Observa mudanças na página.
const observer = new MutationObserver(() => {
    procurarBotaoPular();
});


observer.observe(document.body, {
    childList: true,
    subtree: true
});


// Primeira tentativa assim que o script carregar.
procurarBotaoPular();