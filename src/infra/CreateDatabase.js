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

    // FOREIGN KEY (PLAN_ID) REFERENCES PLANS(id), (inserir plano)

    function criaTabelaUsr() {
      db.run(usersSquema, (error) => {
          if (error) {
            console.log(`Erro ao criar tabela Exemplo. Erro gerado => ${error.message}`)
          }
      })
  }
  
  // const populaTabelaUsr = () => {
  // const ADD_USUARIOS_DATA = `
  // INSERT INTO USUARIOS (NOME, CPF, EMAIL, DATA_DE_NASCIMENTO, TELEFONE, QUANTIDADE_PONTOS, SENHA)
  // VALUES 
  //     ('Eugênio Oliveira', 11111111101, 'eugenio.oliveira@bol.com.br', '1997/05/14',3137726422, 5, '*******'),
  //     ('Olívia Ribeiro', 11111111102,'olivia.ribeiro@gmail.com', '1995/12/06', 3137726422, 10, '*******'),
  //     ('Mirtes Faria Lima', 11111111103, 'mirtes_fl@yahoo.com', '1983/03/24', 3137726422, 2, '*******'),
  // `;
  
  // db.run(ADD_USUARIOS_DATA, (error)=> {
  //     if (error) console.log("Erro ao popular tabela de usuários");
  //  });
  // };
  
  
  db.serialize(()=> {
      criaTabelaUsr();
      // populaTabelaUsr();
  });