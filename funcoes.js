function converterParaMaiusculas(str) {
    let mensagem = str.toUpperCase();  
    return mensagem;
  }
  
  let resultado = converterParaMaiusculas("olá mundo");
  console.log(resultado);

  const converterParaMaiusculas = (str) => {
    let mensagem = str.toUpperCase();  
    return mensagem;
  };
  
  let resultadoArrow = converterParaMaiusculas("olá mundo");
  console.log(resultadoArrow);

  function converterParaMaiusculas(str) {
    let mensagem = str.toUpperCase(); 
    return mensagem;
  }
  
  let resultado = converterParaMaiusculas("olá mundo");
  console.log(resultado);
  
  console.log(mensagem);

  /*A variável mensagem foi declarada dentro da função converterParaMaiusculas, 
  o que significa que ela tem escopo local. 
  Isso quer dizer que ela só pode ser acessada dentro dessa função.
   Quando tentamos acessar mensagem fora da função, ocorre um erro de referência (ReferenceError), 
   pois a variável não existe no escopo global ou fora da função.
   */

function processarDados(callback) {
    console.log("Processando dados...");
    callback();  
  }
  
function concluirProcesso() {
    console.log("Processo concluído!");
  }
  
  processarDados(concluirProcesso);

function buscarUsuario() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ nome: "Fulano", id: 1 });  // Retorna o objeto após 1 segundo
      }, 1000);
    });
  }