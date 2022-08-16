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
CREATE TABLE IF NOT EXISTS "Exemplo" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NOME" varchar(64),
  "EMAIL" varchar(64),
  "SENHA" varchar(64),
  "VALOR" integer,
  "SEXO" char
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
INSERT INTO Exemplo (NOME, EMAIL, SENHA, VALOR, SEXO)
VALUES 
("plano a", "marlon@marlon.com", "????????", 1000, "M"),
("Isabela", "isabela@isabela.com", "????????", 2000, "F"),
("Diego", "diego@diego.com", "????????", 3000, "M"),
("Gustavo", "gustavo@gustavo.com", "????????", 4000, "M");
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
