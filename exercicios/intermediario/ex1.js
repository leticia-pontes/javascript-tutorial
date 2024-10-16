function fibonacci(n) {

    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    }

    let sequencia = [1, 1];

    for (let i = 2; i < n; i++) {
        let proximoNumero = sequencia[i-1] + sequencia[i-2];
        sequencia.push(proximoNumero);
    }

    return sequencia;
}

n = 14;
let resultado = fibonacci(n);
console.log(resultado);