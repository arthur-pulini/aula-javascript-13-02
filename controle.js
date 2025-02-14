let numero = 5; 

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  let soma = 0;
let i = 1;

while (i <= 5) {
  soma += i;
  i++;
}

console.log("A soma dos números de 1 a 5 é:", soma);

// Exercício 2

let opcao = ""; 

do {
  console.log("Escolha uma opção:");
  console.log("A: Opção A");
  console.log("B: Opção B");
  console.log("S: Sair");

  opcao = prompt("Digite uma opção (A, B ou S):");

  switch(opcao) {
    case "A":
      console.log("Opção A selecionada");
      break;
    case "B":
      console.log("Opção B selecionada");
      break;
    case "S":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida");
  }
} while (opcao !== "S");