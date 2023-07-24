import PromptSync from "prompt-sync";
let prompt = PromptSync();
export function forex5() {
    let numAnterior = 0
    let numAtual = 1

    console.log(numAnterior);
    console.log(numAtual);

    for (let contador = 0; contador < 8; contador++) {
        let proximoNum = numAnterior + numAtual;

        console.log(proximoNum);

        numAnterior = numAtual;
        numAtual = proximoNum;

    }
}