function contagemVogais(texto) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let n = 0;

    texto.toLowerCase().split('').forEach(letra => {
        if (vogais.includes(letra)) {
            n += 1;
        }
    });

    console.log(`A string "${texto}" possui ${n} vogais`);
}

let string = "Lorem Ipsum";
contagemVogais(string);
