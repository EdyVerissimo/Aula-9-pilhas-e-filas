
import * as readline from 'readline-sync';
import { Fila } from './queue.js';

const digite = readline;

const fila = new Fila<string>();

let entrada: number = 0;

do {
    console.log(`\n inicio do programa
                 *************************************
                    1 - Adcionar Cliente na fila
                    2 - Listar todos  Clientes 
                    3 - retirar Cliente da fila
                    0 - Sair
                 *************************************`);
    entrada = digite.questionInt("\nDigite a opcao  : ");
    
    switch(entrada) {
        case 1:
            console.log("\nAdcionar Cliente na fila")
            fila.enqueue(digite.question("\ndigite o nome do cliente : "))
            break;
        
        case 2:
            console.log("\nlistar todos Clientes na fila\n")
            if (fila.isEmpty()){
                console.log("Nenhum cliente na fila\n")
            }
            else{
                fila.printQueue();
            }
            break;
        
        case 3:
            console.log("\nretirar Cliente da fila")
            if (fila.isEmpty()){
                console.log("Sem clientes na fila\n")
            }
            else{
            let clientex = fila.dequeue()
                console.log(`Cliente "${clientex}" Foi atendido e retirado da fila`)
            }
            break;
        
        case 0:
                console.log("\nSaindo do programa")
                break;

        }
    }
while (entrada !=0);