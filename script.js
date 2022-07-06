//Crie uma função que recebe um array de
//3 números e coloque eles em ordem crescente. 
//Crie sua própria função para isso.

function ordenacao(array) {
    array.sort()
};

let numeros = [];

for (let contador = 0; contador < 3; contador++) {
    let entradaUsuario = window.prompt("Digite os números");
    
    let numero = parseInt(entradaUsuario);

    numeros.push(numero)

}

console.log(numeros.toString());

ordenacao(numeros);

console.log(numeros.toString());

document.write(numeros);