function parouimpar(num) {
    if (num%2==0) {
        return `O número ${num} é PAR`
    } else {
        return `O número ${num} é IMPAR`
    }
}

console.log(parouimpar(2))