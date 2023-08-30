-- SQLite
INSERT INTO TABELA_INSTITUICAO (
  NOME_INSTITUICAO,
  TELEFONE,
  SITE,
  INSTITUICAO_SLUG,
  IMG_LOGO_URL,
  EMAIL,
  RUA,
  BAIRRO,
  NUM,
  COMPLEMENTO,
  CIDADE,
  UF
)
VALUES (
  'Escola Técnica A',
  '(123) 456-7890',
  'https://www.escolaA.com',
  'escola-tecnica-a',
  'logo-escolaA.jpg',
  'contato@escolaA.com',
  'Rua A',
  'Bairro X',
  123,
  'Apto 101',
  'Cidade Y',
  'UF'
),
(
  'Escola Técnica B',
  '(123) 456-7890',
  'https://www.escolaB.com',
  'escola-tecnica-b',
  'logo-escolaB.jpg',
  'contato@escolaB.com',
  'Rua B',
  'Bairro Z',
  123,
  'Apto 104',
  'Cidade Y',
  'UF'
),
(
  'Escola Técnica C',
  '(123) 456-7890',
  'https://www.escolaC.com',
  'escola-tecnica-c',
  'logo-escolaC.jpg',
  'contato@escolaC.com',
  'Rua C',
  'Bairro G',
  123,
  NULL,
  'Cidade Y',
  'UF'
),
(
  'Escola Técnica D',
  '(123) 456-7890',
  'https://www.escolaD.com',
  'escola-tecnica-d',
  'logo-escolaD.jpg',
  'contato@escolaD.com',
  'Rua D',
  'Bairro J',
  123,
  'Apto 304',
  'Cidade Y',
  'UF'
);



-- Repita para mais escolas...


INSERT INTO TABELA_CATEGORIA_CURSO (
  NOME_CATEGORIA,
  IMG_URL,
  CATEGORIA_SLUG
)
VALUES (
  'Saúde',
  'saude.jpg',
  'saude'
),
(
  'Tecnologia',
  'saude.jpg',
  'tecnologia'
),
(
  'Industrial',
  'saude.jpg',
  'industrial'
),
(
  'Administração',
  'saude.jpg',
  'administracao'
);

-- Repita para mais categorias...


INSERT INTO TABELA_CURSO (
  NOME,
  ID_CATEGORIA_CURSO,
  CURSO_SLUG,
  IMG_URL
)
VALUES (
  'Curso de Enfermagem',
  1,
  'curso-enfermagem',
  'curso-enfermagem.jpg'
),
(
  'Curso de Radiologia',
  1,
  'curso-radiologia',
  'curso-radiologia.jpg'
),
(
  'Curso de Desenvolvimento de Sistemas',
  2,
  'curso-dev-sis',
  'curso-dev-sis.jpg'
),
(
  'Curso de Recursos Humanos',
  4,
  'curso-rh',
  'curso-rh.jpg'
);
-- Repita para mais cursos...


INSERT INTO TABELA_CURSO_INSTITUICAO (
  CURSO_ID,
  INSTITUICAO_ID
)
VALUES (
  1, -- ID do curso
  1  -- ID da instituição
),
(
  2, -- ID do curso
  1  -- ID da instituição
),
(
  3, -- ID do curso
  1  -- ID da instituição
),
(
  4, -- ID do curso
  1  -- ID da instituição
),
(
  2, -- ID do curso
  3  -- ID da instituição
),
(
  1, -- ID do curso
  4  -- ID da instituição
),
(
  2, -- ID do curso
  2  -- ID da instituição
),
(
  3, -- ID do curso
  4  -- ID da instituição
);

-- Repita para mais relações entre cursos e instituições...
