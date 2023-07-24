//4
import PromptSync from "prompt-sync";
let prompt = PromptSync();

export function forex4() {
let numero = parseInt(prompt('Digite um número: '))

 for (let contador = 1; contador <= 10; contador++) {

     console.log(numero +'X' +contador+ '=' + contador*numero);
 }
}