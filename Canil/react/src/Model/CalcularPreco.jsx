import { DateTime } from 'luxon';

export function calcularPrecoTotal(data, pequenos, grandes) {

    const precos = {
        'Meu Canino Feliz': {
            semana: {
                pequeno: 20,
                grande: 40
            },
            fimDeSemana: {
                pequeno: 20 * 1.2,
                grande: 40 * 1.2
            }
        },
        'Vai Rex': {
            semana: {
                pequeno: 15,
                grande: 50
            },
            fimDeSemana: {
                pequeno: 20,
                grande: 55
            }
        },
        'ChowChawgas': {
            todosDias: {
                pequeno: 30,
                grande: 45
            }
        }
    };


    const distancias = {
        'Meu Canino Feliz': 2,
        'Vai Rex': 1.7,
        'ChowChawgas': 0.8
    };


    const dataFormatada = DateTime.fromFormat(data, 'dd/MM/yyyy');


    const fimDeSemana = dataFormatada.weekday >= 6;


    const precoTotalPorPetshop = {
        'Meu Canino Feliz': (fimDeSemana ? precos['Meu Canino Feliz'].fimDeSemana : precos['Meu Canino Feliz'].semana).pequeno * pequenos +
            (fimDeSemana ? precos['Meu Canino Feliz'].fimDeSemana : precos['Meu Canino Feliz'].semana).grande * grandes,
        'Vai Rex': (fimDeSemana ? precos['Vai Rex'].fimDeSemana : precos['Vai Rex'].semana).pequeno * pequenos +
            (fimDeSemana ? precos['Vai Rex'].fimDeSemana : precos['Vai Rex'].semana).grande * grandes,
        'ChowChawgas': precos['ChowChawgas'].todosDias.pequeno * pequenos +
            precos['ChowChawgas'].todosDias.grande * grandes
    };


    let melhorPetshop = '';
    let precoMenor = Number.MAX_VALUE;
    let distanciaMelhorPetshop = Number.MAX_VALUE;

    for (const [petshop, preco] of Object.entries(precoTotalPorPetshop)) {
        if (preco < precoMenor || (preco === precoMenor && distancias[petshop] < distanciaMelhorPetshop)) {
            melhorPetshop = petshop;
            precoMenor = preco;
            distanciaMelhorPetshop = distancias[petshop];
        }
    }


    return [melhorPetshop, precoMenor, distanciaMelhorPetshop];
}

