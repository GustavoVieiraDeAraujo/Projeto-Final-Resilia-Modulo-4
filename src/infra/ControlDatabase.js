// NÃO MEXER NESSE ARQUIVO SEM FALAR COM GRUPO

// Importar sqlite3
import sqlite3 from 'sqlite3'
export const bd = new sqlite3.Database('./src/infra/DataBase.db');

// Processamento de sinal
// Controlar ligamento e desligamento do banco de dados
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);