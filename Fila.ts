import * as readline from 'readline-sync';
import { Fila } from './queue.js';

const digite = readline;
const fila = new Fila<string>();
let entrada: number = 0;

do {
    console.clear(); 
    console.log(`\n
                 *****************************************
                    1 - Adcionar Paciente a fila    
                    2 - Listar todos os Pacientes na fila
                    3 - Chamar(retirar um Paciente da fila
                    4 - Espiar o proximo paciente da fila
                    0 - Sair
                 ******************************************   `);

    entrada = digite.questionInt("\n Digite a opcao desejada: ");
    switch (entrada) {
        case 1:
            console.log(`\n Adicione o paciente a fila`);
            fila.enqueue(digite.question(`\n Digite o nome do Paciente: `));
            break;
        case 2:
            console.log(`\n Lista de todos os Pacientes na fila :`);
            if(fila.isEmpty()){
                console.log(`\n A fila esta vazia`);
            }
            else{
                fila.printQueue();
            }
            break;
        case 3:
            console.log(`\n Chamar o proximo Paciente para sala`);
            if(fila.isEmpty()){
                console.log(`\n Paciente não está mais presente`);
            }
            else{
                let pacientex = fila.dequeue();
                console.log(`\n Paciente ${pacientex}, por favor dirija-se a sala `);
            }
            break;
        case 4:
            console.log(`\n Proximo da fila `);
            if(fila.isEmpty()){
                console.log(`\n A fila esta vazia`);
            }
            else{
                let proximoPaciente = fila.peek();
                console.log(`\n O proximo paciente é ${proximoPaciente}`);
            }
            break;
        case 0:
            console.log(`\n Saindo...`)
            break;     
        default:
            console.log(`\n Entrada INVALIDA`);
            break;
    }
    digite.question("\n Pressione ENTER para continuar...");
    }

while (entrada !=0) 
    console.clear(); 
    console.log(`\nSaiu do programa de fila`)

