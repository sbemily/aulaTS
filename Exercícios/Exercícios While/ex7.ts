import PromptSync from "prompt-sync";
let prompt = PromptSync();

function whileex7() {
    let soma = 0
    let contador = 1

    while (contador <= 100) {
        soma += contador
        contador++

    }
    console.log(soma);
}