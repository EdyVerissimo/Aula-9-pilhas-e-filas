import * as readline from 'readline-sync';
import { Fila } from './queue.js';

const digite = readline;
const fila = new Fila<string>();
let entrada: number = 0;

do {
    console.log(`\n      inicio do programa
                 *************************************
                    1 - Adcionar Paciente a fila    
                    2 - Listar todos os Pacientes na fila
                    3 - Chamar(retirar um Paciente da fila
                    4 - Espiar o proximo paciente da fila
                    6 - Sair`);

    entrada = digite.questionInt("\n digite a opção : ");
    switch (entrada) {
        case 1:
            console.log(`\nAdcione o paciente a fila`);
            fila.enqueue(digite.question(`\n Digite o nome do Paciente: `));
            break;
        case 2:
            console.log(`\nLista de todos os Pacientes na fila :`);
            if(fila.isEmpty()){
                console.log(`\nA fila esta vazia`);
            }
            else{
                fila.printQueue();
            }
            break;
        case 3:
            console.log(`\nChamar o proximo Paciente para sala`);
            if(fila.isEmpty()){
                console.log(`\n Paciente se retirou`);
            }
            else{
                let pacientex = fila.dequeue()
                console.log(`\n Paciente ${pacientex}, por favor dirija-se a sala `)
            }
    
        
    }
    }
while (entrada !=0) {

    console.log(`\nSaiu do programa de fila`)
}