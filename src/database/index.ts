import sqlite3 from 'sqlite3';
import path from 'path';

const DB_PATH = path.join(__dirname, 'db.sqlite');

const db = new sqlite3.Database(DB_PATH, (err: ErrorCallback) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida.');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS TABELA_INSTITUICAO (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME_INSTITUICAO VARCHAR NOT NULL,
      TELEFONE VARCHAR NOT NULL,
      SITE VARCHAR,
      IMG_LOGO VARCHAR,
      EMAIL VARCHAR NOT NULL,
      RUA VARCHAR NOT NULL,
      BAIRRO VARCHAR NOT NULL,
      NUM INT NOT NULL,
      COMPLEMENTO VARCHAR,
      CIDADE VARCHAR NOT NULL,
      UF VARCHAR NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS MODALIDADE_CURSO (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME_MODALIDADE VARCHAR NOT NULL,
      IMG_URL VARCHAR NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS CURSO_TABLE (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME VARCHAR NOT NULL,
      TIPO_CURSO INT,
      CATEGORIA VARCHAR NOT NULL,
      MODALIDADE VARCHAR NOT NULL,
      ID_INSTITUICAO INT,
      IMG_URL VARCHAR NOT NULL,
      FOREIGN KEY (TIPO_CURSO) REFERENCES MODALIDADE_CURSO (ID),
      FOREIGN KEY (ID_INSTITUICAO) REFERENCES TABELA_INSTITUICAO (ID)
    )
  `);
});

export default db;
