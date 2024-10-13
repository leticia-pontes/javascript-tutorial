function fatorial(numero, numeroFatorial=1) {
    if (numero < 1) return 1;
    return numeroFatorial = numero * fatorial (numero - 1);
}

numero = 10;
numeroFatorial = fatorial(numero);
console.log(`${numero}! = ${numeroFatorial}`);
