CREATE TABLE IF NOT EXISTS tbl_endereco (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  logradouro VARCHAR NOT NULL,
  bairro VARCHAR NOT NULL,
  numero VARCHAR NOT NULL,
  complemento VARCHAR,
  cidade VARCHAR NOT NULL,
  uf VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_escola (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR NOT NULL,
  telefone VARCHAR NOT NULL,
  site VARCHAR,
  slug VARCHAR NOT NULL,
  img_url VARCHAR,
  email VARCHAR NOT NULL,
  id_endereco INTEGER,
  
  FOREIGN KEY (id_endereco) REFERENCES tbl_endereco(id)
);

CREATE TABLE IF NOT EXISTS tbl_categoria (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR NOT NULL,
  slug VARCHAR NOT NULL,
  img_url VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_curso (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR NOT NULL,
  slug VARCHAR NOT NULL,
  img_url VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_escolas_categorias (
  id_escola INTEGER NOT NULL,
  id_categoria INTEGER NOT NULL,
  
  PRIMARY KEY (id_escola, id_categoria),
  
  FOREIGN KEY (id_escola) REFERENCES tbl_escola(id),
  FOREIGN KEY (id_categoria) REFERENCES tbl_categoria(id)
);

CREATE TABLE IF NOT EXISTS tbl_cursos_categorias (
  id_curso INTEGER NOT NULL,
  id_categoria INTEGER NOT NULL,
  
  PRIMARY KEY (id_curso, id_categoria),
  
  FOREIGN KEY (id_curso) REFERENCES tbl_curso(id),
  FOREIGN KEY (id_categoria) REFERENCES tbl_categoria(id)
);

INSERT INTO tbl_endereco (logradouro, bairro, numero, complemento, cidade, uf)
VALUES
('Rua A', 'Bairro X', '123', 'Apto 101', 'Cidade Y', 'UF'),
('Rua B', 'Bairro Z', '123', 'Apto 104', 'Cidade Y', 'UF'),
('Rua C', 'Bairro G', '123', NULL, 'Cidade Y', 'UF'),
('Rua D', 'Bairro J', '123', 'Apto 304', 'Cidade Y', 'UF');


INSERT INTO tbl_categoria (nome, slug, img_url)
VALUES
('Saúde', 'https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80', 'saude'),
('Tecnologia', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'tecnologia'),
('Industrial', 'https://plus.unsplash.com/premium_photo-1663100163323-bcc8b597ce4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80', 'industrial'),
('Administração', 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80','administracao');
