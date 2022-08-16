import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/infra/database.db");

const CreateTablePlans = `
CREATE TABLE IF NOT EXISTS PLANS (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NOME" varchar(64),
  "TIPO_PLANO" varchar(64),
  "DESCRICAO" varchar(200),
  "VALOR" integer,
  "DURACAO_PLANO" integer
);`;

const PopulatingTablePlans = `
INSERT INTO Exemplo (TIPO_PLANO, DESCRICAO, VALOR, DURACAO_PLANO)
VALUES 
("plano basic", "10% de desconto nos ingressos e no combo de pipoca.", 39, trimestral),
("plano standart", "20% de desconto nos ingressos, no combo de pipoca e em cinemas IMAX. ", 49, trimestral),
("plano premium", "30% de desconto nos ingressos + combo de pipoca e acesso livre às salas IMAX.", 69, trimestral)

`;

function criaTabelaPlanos() {
  db.run(CreateTablePlans, (error) => {
    if (error) {
      console.log(
        `Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`
      );
    }
  });
}

function povoaTabelaPlanos() {
  db.run(PopulatingTablePlans, (error) => {
    if (error) {
      console.log(
        `Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`
      );
    }
  });
}

db.serialize(() => {
  criaTabelaPlanos();
  povoaTabelaPlanos();
});
