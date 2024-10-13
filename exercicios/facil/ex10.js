function inverterString(str) {
    return str.split('').reverse().join('');
}

function removerCaracteresEspeciais(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

function verificarPalindromo(str) {
    return str.toLowerCase() === inverterString(str).toLowerCase();
}

str = 'Socorram-me, subi no ônibus em Marrocos';
palindromo = verificarPalindromo(removerCaracteresEspeciais(str));

console.log(`${palindromo ? 'É' : 'NÃO É'} palíndromo`);