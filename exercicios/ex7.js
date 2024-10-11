function verificaNumeroPrimo(numero) {
    for (i = 2; i <= numero; i++) {
        if (numero % 2 == 0) {
            return false;
        }
    }
    return true;
}

numero = 17;
primo = verificaNumeroPrimo(numero);

console.log(numero + (primo ? ' É ' : ' NÃO É ') + 'primo');