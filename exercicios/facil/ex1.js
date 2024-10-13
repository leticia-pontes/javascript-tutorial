function isNumber(value) {
    return typeof value == "number";
}

function sum(...numbers) {
    if (!numbers.every(isNumber)) {
        throw new TypeError("Todos os parâmetros devem ser números");
    }
    
    const total = numbers.reduce((acc, cur) => acc + cur, 0);

    return total;
}

const numbers = [1, 2, 4, 6, 23, 12, 10, 24, 7]
const total = sum(...numbers)
console.log(`Soma: ${total}`)