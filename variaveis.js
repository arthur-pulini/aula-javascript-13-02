let nome = "Arthur Eduardo Luna Pulini";  
let idade = 23; 
let aprovado = true;  
let notas = [8.5, 7.0, 9.0];  
let usuario = {
  email: "arthurpulini@gmail.com",  
  senha: "suaSenha123"  
};

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Aprovado:", aprovado);
console.log("Notas:", notas);
console.log("Usuário:", usuario);

// Explicando a diferença entre null e undefined:

/*
- null: é um valor atribuído explicitamente a uma variável, significando "nenhum valor" ou "ausência de valor". 
  Exemplo:
  let exemploNull = null;  // variável com valor null
  
- undefined: é o valor padrão de uma variável não inicializada ou de uma propriedade que não existe em um objeto. 
  Exemplo:
  let exemploUndefined;  // variável sem valor definido, automaticamente recebe undefined
*/


// Exercício 2

let valorNulo = null;
let valorIndefinido;

if (valorNulo === null) {
  console.log("valorNulo é null");
} else if (valorNulo === undefined) {
  console.log("valorNulo é undefined");
}

if (valorIndefinido === null) {
  console.log("valorIndefinido é null");
} else if (valorIndefinido === undefined) {
  console.log("valorIndefinido é undefined");
}