-- SQLite

-- SELECT
--   C.*,
--   CC.NOME_CATEGORIA,
--   CC.CATEGORIA_SLUG
-- FROM
--   TABELA_CURSO C
-- INNER JOIN
--   TABELA_CURSO_INSTITUICAO CI ON C.ID = CI.CURSO_ID
-- INNER JOIN
--   TABELA_INSTITUICAO I ON CI.INSTITUICAO_ID = I.ID
-- INNER JOIN
--   TABELA_CATEGORIA_CURSO CC ON C.ID_CATEGORIA_CURSO = CC.ID
-- WHERE
--   I.ID = 4;

SELECT * FROM TABELA_INSTITUICAO;
SELECT * FROM TABELA_CATEGORIA_CURSO;
SELECT * FROM TABELA_CURSO_INSTITUICAO;
SELECT * FROM TABELA_CURSO;