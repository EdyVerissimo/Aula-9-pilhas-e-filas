import * as readline from 'readline-sync';
import { Fila } from './queue.js';
const digite = readline;
const fila = new Fila();
let entrada = 0;
do {
    console.log(`*************************************
                    1 - Adcionar Cliente na fila
                    2 - Listar todos  Clientes 
                    3 - retirar Cliente da fila
                    0 - Sair
                 *************************************`);
    entrada = digite.questionInt("Digite a opcao desejada : ");
    switch (entrada) {
        case 1:
            console.log("\nAdcionar Cliente na fila");
            fila.enqueue(digite.question("digite o nome do cliente : "));
            break;
        case 2:
            console.log("\nlistar todos Clientes");
            fila.printQueue();
            break;
        case 3:
            console.log("\nretirar Cliente da fila");
            if (fila.isEmpty()) {
                console.log("A fila está vazia");
            }
            else {
                let clientex = fila.dequeue();
                console.log(`Cliente "${clientex}" Foi atendido e retirado da fila`);
            }
            break;
    }
} while (entrada != 0);
//# sourceMappingURL=aula09-01.js.map