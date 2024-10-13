function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

function calcularMedia(...numeros) {
    return soma(...numeros) / numeros.length;
}

media = calcularMedia(10, 8, 9, 7, 2, 5);

console.log(`A média é ${media}`);