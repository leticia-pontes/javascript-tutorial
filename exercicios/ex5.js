function maiorNumero(...numeros) {
    let maior = numeros[0];

    numeros.forEach(n => {
        if (n > maior) {
            maior = n;
        }
    });
    
    return maior;
}

numeros = [12, 4, 33, 61, 18, 109, 1, 53];
maior = maiorNumero(...numeros);
console.log(`O maior número é ${maior}`);