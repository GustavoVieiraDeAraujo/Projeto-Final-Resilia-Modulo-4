
import sqlite3 from 'sqlite3'
export const bd = new sqlite3.Database('./src/infra/DataBase.db');


process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);
