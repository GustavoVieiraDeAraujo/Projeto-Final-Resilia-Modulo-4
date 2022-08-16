import sqlite3 from 'sqlite3'
const db = new sqlite3.Database('./src/infra/database.db');

const CreateTableMovies =`
CREATE TABLE IF NOT EXISTS "movies" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NOME" varchar(64),
  "DATA_DE_CRIACAO" date,
  "SINOPSE" varchar(250),
  "CLASSIFICACAO" integer,
  "DURACAO" time,
  "HORARIOS" time
);`;


const PopulatingTableMovies =`
INSERT INTO movies (NOME, DATA_DE_CRIACAO, SINOPSE, CLASSIFICACAO, DURACAO, HORARIOS)
VALUES 
("Resident Evil 2: Apocalipse", "2004-10-08", "A heroína Alice tenta livrar
 Raccoon City de um segundo ataque de zumbis, mas a diabólica Umbrella 
 Corporation e os militares têm uma nova arma secreta. Os sobreviventes Jill Valentine,
  Carlos Oliviera e Nicholai lutam ao lado de Alice contra um novo e melhorado 
  Matt Addison de codinome Nemesis", 18, "01:34:00", "10:00:00"),

("Resident Evil 3: A Extinção", "2007-10-05", "Alice e os sobreviventes da catástrofe 
de Raccon tentam chegar ao Alasca, atravessando o deserto de Nevada. 
O grupo se une para lutar contra a poderosa organização Umbrella 
antes que o vírus que transforma humanos em aterrorizantes zumbis 
contamine todo o mundo.", 18, "01:34:00", "10:00:00"),

("Resident Evil 4: Recomeço", "2010-09-17", "Em um mundo dominado por mortos-vivos,
 Alice continua sua batalha para salvar sobreviventes. 
 Sua batalha se intensifica e ela recebe a ajuda de um velho amigo.
  Em Los Angeles, pode existir um lugar para salvar-se, mas a cidade foi invadida
  por mortos-vivos.", 18, "01:40:00", "10:00:00");
`


function criaTabelaMovies() {
    db.run(CreateTableMovies, (error) => {
        if (error) {
          console.log(`Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`)
        }
    })
}


function povoaTabelaMovies() {
    db.run(PopulatingTableMovies , (error) => {
        if (error) {
          console.log(`Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`)
        }
    })
}


db.serialize( ()=> {
  criaTabelaMovies();
  povoaTabelaMovies();
})

