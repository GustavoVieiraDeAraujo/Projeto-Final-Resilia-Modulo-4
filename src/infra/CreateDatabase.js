import sqlite3 from 'sqlite3'
const db = new sqlite3.Database('./src/infra/database.db');

const usersSquema =` 
  CREATE TABLE IF NOT EXISTS "USUARIOS" (
      "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
      "NOME" varchar(64),
      "CPF" varchar(11),
      "EMAIL" varchar(64),
      "DATA_DE_NASCIMENTO" date,
      "TELEFONE" varchar(14),
      "QUANTIDADE_PONTOS" integer,
      "SENHA" varchar(64)
    );`;
    
const CreateTableTickets =`
  CREATE TABLE IF NOT EXISTS TICKETS (
  "ID" varchar(150) PRIMARY KEY NOT NULL,
  "SYMBOL" varchar(120),
  "TYPE" varchar(120),
  "PRICE" integer,
  "DESCRIPTION" text,
  "SCORE" integer,
  "CREATION_DATE" varchar(120),
  "LAST_UPDATE" varchar(120));`

const UsersAdd = `
INSERT INTO USUARIOS (NOME, CPF, EMAIL, DATA_DE_NASCIMENTO, TELEFONE, QUANTIDADE_PONTOS, SENHA)
VALUES 
    ('Eugênio Oliveira', 11111111101, 'eugenio.oliveira@bol.com.br', '1997/05/14',3137726422, 5, '*******'),
    ('Olívia Ribeiro', 11111111102,'olivia.ribeiro@gmail.com', '1995/12/06', 3137726422, 10, '*******'),
    ('Mirtes Faria Lima', 11111111103, 'mirtes_fl@yahoo.com', '1983/03/24', 3137726422, 2, '*******');
`
const PopulatingTableTickets =`
INSERT INTO TICKETS (ID, SYMBOL, TYPE, PRICE, DESCRIPTION, SCORE, CREATION_DATE, LAST_UPDATE)
VALUES 
('5e7079eb-4ff3-4cbc-b6a5-b377e1c8ec00','🍂', 'U2FsdGVkX1/25vV40KYrxvHq6R0=', 'U2FsdGVkX18blUfyh61gtZTX', 'U2FsdGVkX18NymCNBGMaZWbXKHM=', 'U2FsdGVkX19pHPx5Nsky4Y6z', '🕗 16/08/2022 => 17:10:16 🕗', '🕗 16/08/2022 => 17:10:16 🕗'),
('e85cc766-5a95-438c-822c-8a0c36864618','🚵🏼','U2FsdGVkX1833yXjM27I5Jp9tHNZHA==','U2FsdGVkX1+5qXstUKWfIy1L','U2FsdGVkX18qoWaQf8ZLkvW1ibBjWA==','U2FsdGVkX19xcT9P264WTCkF','🕗 16/08/2022 => 17:10:16 🕗', '🕗 16/08/2022 => 17:10:16 🕗'),
('9042d5f3-cebd-4661-a75b-47a40c8a4474','🤜🏻','U2FsdGVkX1/lzwgADXB7E13BcUy7dg==','U2FsdGVkX19fN09SWAFPSWOr','U2FsdGVkX1+i/lEqs0ACyn5/lbrY','U2FsdGVkX1/muXHqJ5YNfd6H','🕗 16/08/2022 => 17:10:16 🕗', '🕗 16/08/2022 => 17:10:16 🕗');
`

function criaTabelaUsr() {
  db.run(usersSquema, (error) => {
      if (error) {
        console.log(`Erro ao criar tabela Usuarios. Erro gerado => ${error.message}`)
      }
  })
}

function criaTabelaTickets() {
    db.run(CreateTableTickets, (error) => {
        if (error) {
          console.log(`Erro ao criar tabela Tickets. Erro gerado => ${error.message}`)
        }
    })
}
  
function populaTabelaUsr() {
    db.run(UsersAdd , (error) => {
        if (error) {
          console.log(Erro ao povoar tabela Usuarios. Erro gerado => ${error.message})
        }
    })
}

function povoaTabelaTickets() {
    db.run(PopulatingTableTickets , (error) => {
        if (error) {
          console.log(`Erro ao povoar tabela Tickets. Erro gerado => ${error.message}`)
        }
    })
}

db.serialize( ()=> {
  criaTabelaTickets();
  povoaTabelaTickets();
  criaTabelaUsr();
  populaTabelaUsr();
})

