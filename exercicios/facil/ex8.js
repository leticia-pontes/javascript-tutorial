function divisao(a, b) {
    if (b === 0) {
        console.log('Erro: divisão por zero.');
        return null;
    }
    return a / b;
}

a = 14;
b = 8;

resultado = divisao(a, b);
if (resultado !== null) {
    console.log(`${a} / ${b} = ${resultado}`);
}