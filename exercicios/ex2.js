function verificaNumeroPar(numero) {
    return numero % 2 == 0;
}

numero = 47;
ehPar = verificaNumeroPar(numero);
console.log(`${numero} é ${ehPar ? 'PAR' : 'ÍMPAR'}`);
