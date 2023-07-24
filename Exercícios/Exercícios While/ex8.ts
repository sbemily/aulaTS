import PromptSync from "prompt-sync";
let prompt = PromptSync();

function whileex8() {
    import PromptSync from "prompt-sync";
    let prompt = PromptSync();

    let idade
    do {
        idade = prompt('Digite a sua idade: ')
    } while (idade < 18);
    console.log("Você é maior de idade!");
}