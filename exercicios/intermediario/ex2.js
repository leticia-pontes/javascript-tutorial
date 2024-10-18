function totalPalavrasString(texto) {
    return texto.trim().split(/\s+/);
}

function contagemDePalavras(texto, palavra) {
    palavras = totalPalavrasString(texto);
    quantidade = 0;

    palavras.forEach(p => {
        if (p == palavra) {
            quantidade += 1;
        }
    });

    return quantidade;
}

texto = "lorem ipsum dolor sit amet";
palavra = "mundo";

total = contagemDePalavras(texto, palavra);
console.log(total);

palavra = "dolor";

total = contagemDePalavras(texto, palavra);
console.log(total);