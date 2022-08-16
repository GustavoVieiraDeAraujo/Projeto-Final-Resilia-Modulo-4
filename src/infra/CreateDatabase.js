import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/infra/database.db");

// Molde para Criação de Tabela
// ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓

// const CreateTable<coloca o nome da tabela aqui>=`
// CREATE TABLE IF NOT EXISTS <coloca o nome da tabela aqui> (
//     "ID" INTEGER PRIMARY KEY AUTOINCREMENT
//     (campo ID é padrão em todas as tabelas do projeto)
//     <coloca os outros campos da tabela aqui>
//);`

// Exemplo
// ⇓⇓⇓⇓⇓⇓⇓

const CreateTableExemplo = `
CREATE TABLE IF NOT EXISTS PLANS (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NOME" varchar(64),
  "TIPO_PLANO" varchar(64),
  "DESCRICAO" varchar(200),
  "VALOR" integer,
  "DURACAO_PLANO" integer
);`;

// Molde para Povoar a Tabela
// ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓

// const PopulatingTable<coloca o nome da tabela aqui> =`
// INSERT INTO <coloca o nome da tabela aqui> (<coloca os campos da tabela aqui>)
// VALUES (<coloca os dados que vão ser inseridos aqui>)
//;`

// Exemplo
// ⇓⇓⇓⇓⇓⇓⇓

const PopulatingTableExemplo = `
INSERT INTO Exemplo (TIPO_PLANO, DESCRICAO, VALOR, DURACAO_PLANO)
VALUES 
("plano basic", "10% de desconto nos ingressos e no combo de pipoca.", 39, trimestral),
("plano standart", "20% de desconto nos ingressos, no combo de pipoca e em cinemas IMAX. ", 49, trimestral),
("plano premium", "30% de desconto nos ingressos + combo de pipoca e acesso livre às salas IMAX.", 69, trimestral)

`;

// Molde da função de CRIAÇÃO da tabela
// ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓

// function criaTabela<nome da tabela>() {
//     db.run(<nome do molde de criação da tabela>, (error) => {
//         if (error) {
//           console.log(`Erro ao criar tabela <nome da tabela>. Erro gerado => ${error.message}`)
//         }
//     })
// }

// Exemplo
// ⇓⇓⇓⇓⇓⇓⇓

function criaTabelaExemplo() {
  db.run(CreateTableExemplo, (error) => {
    if (error) {
      console.log(
        `Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`
      );
    }
  });
}

// Molde da função de POVOAMENTO da tabela
// ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓

// function povoaTabela<nome da tabela>() {
//     db.run(<nome do molde de povoamento da tabela>, (error) => {
//         if (error) {
//           console.log(`Erro ao criar tabela <nome da tabela>. Erro gerado => ${error.message}`)
//         }
//     })
// }

// Exemplo
// ⇓⇓⇓⇓⇓⇓⇓

function povoaTabelaExemplo() {
  db.run(PopulatingTableExemplo, (error) => {
    if (error) {
      console.log(
        `Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`
      );
    }
  });
}

// Toques Finais
// ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓

// !!!!!!!!!!!!! PRIMEIRO CRIA A TABELA !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!! DEPOIS POVOA ELA !!!!!!!!!!!!!!!

// db.serialize( ()=> {
//    <coloque as funções criadas aqui dentro>
// });

// Exemplo
// ⇓⇓⇓⇓⇓⇓⇓

db.serialize(() => {
  criaTabelaExemplo();
  povoaTabelaExemplo();
});

// Esse arquivo cria o arquivo database.db com as tabelas povoadas, logo a partir dele é possivel gerar o database a qualquer momento, basta executar ele no terminal
// Comando para executar o arquivo partindo da pasta do projeto=>  node ./src/infra/create-and-populate.js
