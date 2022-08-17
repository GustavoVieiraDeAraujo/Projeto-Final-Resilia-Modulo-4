import sqlite3 from 'sqlite3'
const db = new sqlite3.Database('./src/infra/database.db');

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

const PopulatingTableTickets =`
INSERT INTO TICKETS (ID, SYMBOL, TYPE, PRICE, DESCRIPTION, SCORE, CREATION_DATE, LAST_UPDATE)
VALUES 
('5e7079eb-4ff3-4cbc-b6a5-b377e1c8ec00','🍂', 'U2FsdGVkX1/25vV40KYrxvHq6R0=', 'U2FsdGVkX18blUfyh61gtZTX', 'U2FsdGVkX18NymCNBGMaZWbXKHM=', 'U2FsdGVkX19pHPx5Nsky4Y6z', '🕗 16/08/2022 => 17:10:16 🕗', '🕗 16/08/2022 => 17:10:16 🕗'),
('e85cc766-5a95-438c-822c-8a0c36864618','🚵🏼','U2FsdGVkX1833yXjM27I5Jp9tHNZHA==','U2FsdGVkX1+5qXstUKWfIy1L','U2FsdGVkX18qoWaQf8ZLkvW1ibBjWA==','U2FsdGVkX19xcT9P264WTCkF','🕗 16/08/2022 => 17:10:16 🕗', '🕗 16/08/2022 => 17:10:16 🕗'),
('9042d5f3-cebd-4661-a75b-47a40c8a4474','🤜🏻','U2FsdGVkX1/lzwgADXB7E13BcUy7dg==','U2FsdGVkX19fN09SWAFPSWOr','U2FsdGVkX1+i/lEqs0ACyn5/lbrY','U2FsdGVkX1/muXHqJ5YNfd6H','🕗 16/08/2022 => 17:10:16 🕗', '🕗 16/08/2022 => 17:10:16 🕗');
`

function criaTabelaTickets() {
    db.run(CreateTableTickets, (error) => {
        if (error) {
          console.log(`Erro ao criar tabela Tickets. Erro gerado => ${error.message}`)
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
})