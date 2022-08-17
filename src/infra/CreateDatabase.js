import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/infra/database.db");

const CreateTablePlans = `
CREATE TABLE IF NOT EXISTS PLANS (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "TIPO_PLANO" varchar(64),
  "DESCRICAO" varchar(200),
  "VALOR" integer,
  "DURACAO_PLANO" integer
);`;

const PopulatingTablePlans = `
INSERT INTO PLANS (TIPO_PLANO, DESCRICAO, VALOR, DURACAO_PLANO)
VALUES 
("plano basic", "1 ingresso por mês para assistir qualquer filme no cinema e 25% de desconto na pipoca e no refrigerante.", 19, "mensal"),
("plano standart", "2 ingressos por mês para assistir qualquer filme no cinema e 35% de desconto na pipoca e no refrigerante e 35% de desconto nas salas IMAX 4K e 3D. ", 39, "mensal"),
("plano premium", "4 ingressos por mês para assistir qualquer filme no cinema, combo pipoca  + refrigerante e salas IMAX 4K e 3D inclusas.", 79, "mensal");`

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
