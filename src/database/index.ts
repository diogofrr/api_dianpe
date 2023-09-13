import sqlite3 from 'sqlite3';

const DB_PATH = './data/db.sqlite';

const db = new sqlite3.Database(DB_PATH, (err) => {
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
      INSTITUICAO_SLUG VARCHAR NOT NULL,
      IMG_LOGO_URL VARCHAR,
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
    CREATE TABLE IF NOT EXISTS TABELA_CATEGORIA_CURSO (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME_CATEGORIA VARCHAR NOT NULL,
      IMG_URL VARCHAR NOT NULL,
      CATEGORIA_SLUG VARCHAR NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS TABELA_CURSO (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME VARCHAR NOT NULL,
      ID_CATEGORIA_CURSO INT,
      CURSO_SLUG VARCHAR NOT NULL,
      IMG_URL VARCHAR NOT NULL,
      FOREIGN KEY (ID_CATEGORIA_CURSO) REFERENCES TABELA_CATEGORIA_CURSO (ID)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS TABELA_CURSO_INSTITUICAO (
      CURSO_ID INTEGER,
      INSTITUICAO_ID INTEGER,
      FOREIGN KEY (CURSO_ID) REFERENCES TABELA_CURSO (ID),
      FOREIGN KEY (INSTITUICAO_ID) REFERENCES TABELA_INSTITUICAO (ID),
      PRIMARY KEY (CURSO_ID, INSTITUICAO_ID)
    )
  `);

  db.run(`
    INSERT INTO TABELA_INSTITUICAO (
        NOME_INSTITUICAO, TELEFONE, SITE, INSTITUICAO_SLUG, IMG_LOGO_URL, EMAIL,
        RUA, BAIRRO, NUM, COMPLEMENTO, CIDADE, UF
    ) VALUES
        ('Escola de Tecnologia Digital TecnoAvanço', '3499456789', 'www.webwizardschool.com.br/', 'escola-tecnoavanco', 'https://i.postimg.cc/SXGPXbPy/Escola-de-Tecnologia-Digital-Tecno-Avan-o.png', 'info@tecdigital.com', 'Rua das Tecnologias, 123', 'Uberlândia', 38400001, NULL, 'Uberlândia', 'MG'),
        ('Instituto de Ciência da Computação FuturoTech', '3499912456', 'www.cybersafeinstitute.com.br', 'instituto-futurotech', 'https://i.postimg.cc/62j10Lwg/Instituto-de-Ci-ncia-da-Computa-o-Futuro-Tech.png', 'contato@cienciadofuturo.com', 'Rua da Segurança Cibernética, 456', 'Uberlândia', 38400002, NULL, 'Uberlândia', 'MG'),
        ('Faculdade de Gestão Empresarial AdministraBrasil', '3499987654', 'www.administracaototalinstitute.com.br', 'faculdade-administrabrasil', 'https://i.postimg.cc/xNXpFJ1C/Faculdade-de-Gest-o-Empresarial-Administra-Brasil.png', 'atendimento@administracaototal.com', 'Avenida da Administração, 789', 'Uberlândia', 38400003, NULL, 'Uberlândia', 'MG'),
        ('Escola de Administração Executiva Empreendeli', '3498461247', 'www.marketedgeacademy.com.br', 'escola-empreendeli', 'https://i.postimg.cc/625mn1sC/Escola-de-Administra-o-Executiva-Empreendeli.png', 'suporte@admexecutiva.com', 'Rua do Marketing, 567', 'Uberlândia', 38400004, NULL, 'Uberlândia', 'MG'),
        ('Centro de Saúde Integrada SaúdeVital', '3499781234', 'www.medilearninstitute.com.br', 'centro-saudevital', 'https://i.postimg.cc/PLHcr523/Centro-de-Sa-de-Integrada-Sa-de-Vital.png', 'contato@saudevital.com', 'Rua da Medicina, 321', 'Uberlândia', 38400005, NULL, 'Uberlândia', 'MG'),
        ('Instituto de Medicina Avançada VidaSaudável', '3491235678', 'www.medicalproschool.com.br', 'instituto-vidasaudavel', 'https://i.postimg.cc/sB36C0gb/Instituto-de-Medicina-Avan-ada-Vida-Saud-vel.png', 'atendimento@medicinaavancada.com', 'Avenida dos Profissionais de Saúde, 234', 'Uberlândia', 38400006, NULL, 'Uberlândia', 'MG'),
        ('Escola de Criatividade e Expressão Visual', '3497842525', 'www.criatividadevisual.com.br', 'escola-criatividadevisual', 'https://i.postimg.cc/mhn51wmF/Escola-de-Criatividade-e-Express-o-Visual.png', 'contato@criatividadevisual.com', 'Rua da Expressão Artística, 789', 'Uberlândia', 38400007, NULL, 'Uberlândia', 'MG'),
        ('Instituto de Arte e Design Brasil', '3492358788', 'www.artedesignbrasil.com.br', 'instituto-artedesignbrasil', 'https://i.postimg.cc/56FkBCrK/Instituto-de-Arte-e-Design-Brasil.png', 'info@artedesignbrasil.com', 'Avenida das Artes, 654', 'Uberlândia', 38400008, NULL, 'Uberlândia', 'MG'),
        ('Instituto de Educação Pedagógica Brasil', '3493299174', 'www.educacaopedagogicabrasil.com.br', 'instituto-educacaopedagogicabrasil', 'https://i.postimg.cc/87RK3VNh/Instituto-de-Educa-o-Pedag-gica-Brasil.png', 'atendimento@pedagogicabrasil.com', 'Rua da Educação, 987', 'Uberlândia', 38400009, NULL, 'Uberlândia', 'MG'),
        ('Escola de Formação de Educadores Avançados', '3491257456', 'www.formacaoeducadoresavancados.com.br', 'escola-formacaoeducadoresavancados', 'https://i.postimg.cc/Lh5Ws73p/Escola-de-Forma-o-de-Educadores-Avan-ados.png', 'contato@formacaoeducadores.com', 'Avenida da Formação Pedagógica, 543', 'Uberlândia', 38400010, NULL, 'Uberlândia', 'MG');


    INSERT INTO TABELA_CATEGORIA_CURSO (
      NOME_CATEGORIA,
      IMG_URL,
      CATEGORIA_SLUG
    )
    VALUES
    ('Tecnologia da Informação', 'https://www.mackenzie.br/fileadmin/ARQUIVOS/Public/6-pos-graduacao/upm-higienopolis/EAD/Gest%C3%A3o_de_Tecnologia_da_Informa%C3%A7%C3%A3o/AdobeStock_487098177_Gest%C3%A3o_de_Tecnologia_da_Informa%C3%A7%C3%A3o.jpeg', 'tecnologia-da-informacao'),
    ('Negócios e Administração', 'https://t42748.vteximg.com.br/arquivos/ids/179131-1920-1280/administracao-de-conflitos-no-mundo-dos-negocios.jpg?v=637879737282830000', 'negocios-e-administracao'),
    ('Saúde e Medicina', 'https://global-uploads.webflow.com/5f7c5ad0f02de81be2e6417c/62ab6a97e4e49e6f2145da6a_medicina-preventiva.jpg', 'saude-e-medicina'), 
    ('Artes e Design', 'https://img.imageboss.me/revista-cdn/cdn/24714/f5aa11d17b3cffdd1af691e255d3310a39e22990.jpg?1572985641', 'artes-e-design'),
    ('Educação', 'https://smastr16.blob.core.windows.net/cea/sites/7/2020/09/educacao.jpg', 'educacao');

    
    INSERT INTO TABELA_CURSO (
      NOME,
      ID_CATEGORIA_CURSO,
      CURSO_SLUG,
      IMG_URL
    )
    VALUES 
    ('Técnico em Desenvolvimento de Software', 1, 'desenvolvimento-de-software', 'https://i.postimg.cc/Typ0295J/T-cnico-em-Desenvolvimento-de-Software.png'),
    ('Técnico em Suporte de Informática', 1, 'suporte-de-informatica', 'https://i.postimg.cc/cgtFhmsL/T-cnico-em-Suporte-de-Inform-tica.png'),
    ('Curso de Programação Web', 1, 'programacao-web', 'https://i.postimg.cc/wtvfyzZJ/Curso-de-Programa-o-Web.png'),
    ('Curso de Segurança da Informação', 1, 'seguranca-da-informacao', 'https://i.postimg.cc/PPjSbY0d/Curso-de-Seguran-a-da-Informa-o.png'),
    ('Curso de Análise de Dados', 1, 'analise-de-dados', 'https://i.postimg.cc/VSgw1zMC/Curso-de-Analise-de-Dados.png'),
    ('Curso de Design de Interface de Usuário', 1, 'design-de-interface-de-usuario', 'https://i.postimg.cc/G9HRwwp4/Curso-de-Design-de-Interface-de-Usu-rio.png'),
    ('Curso de Administração de Banco de Dados', 1, 'administracao-de-banco-de-dados', 'https://i.postimg.cc/06PvLz6v/Curso-de-Administra-o-de-Banco-de-Dados.png'),
    ('Curso de Redes de Computadores', 1, 'redes-de-computadores', 'https://i.postimg.cc/8sWyrtKy/Curso-de-Redes-de-Computadores.png'),
    /**/
    ('Técnico em Administração de Empresas', 2, 'administracao-de-empresas', 'https://i.postimg.cc/xXsgS78d/T-cnico-em-Administra-o-de-Empresas.png'),
    ('Técnico em Gestão Financeira', 2, 'gestao-financeira', 'https://i.postimg.cc/YGFxYC34/T-cnico-em-Gest-o-Financeira.png'),
    ('Curso de Marketing Digital', 2, 'marketing-digital', 'https://i.postimg.cc/HVDhSf8D/Curso-de-Marketing-Digital.png'),
    ('Curso de Gestão de Projetos', 2, 'gestao-de-projetos', 'https://i.postimg.cc/5XmTQn0c/Curso-de-Gest-o-de-Projetos.png'),
    ('Curso de Recursos Humanos', 2, 'recursos-humanos', 'https://i.postimg.cc/XBMQzCJc/Curso-de-Recursos-Humanos.png'),
    ('Curso de Empreendedorismo', 2, 'empreendorismo', 'https://i.postimg.cc/ygGwYxNk/Curso-de-Empreendedorismo.png'),
    ('Curso de Logística Empresarial', 2, 'logistica-empresarial', 'https://i.postimg.cc/0MhB14tS/Curso-de-Log-stica-Empresarial.png'),
    ('Curso de Contabilidade Básica', 2, 'cotabilidade-basica', 'https://i.postimg.cc/GT8nkYfF/Curso-de-Contabilidade-B-sica.png'),
    /**/
    ('Técnico em Enfermagem', 3, 'enfermagem', 'https://i.postimg.cc/zL6jygnZ/T-cnico-em-Enfermagem.png'),
    ('Técnico em Radiologia', 3, 'radiologia', 'https://i.postimg.cc/JHW5qC6p/T-cnico-em-Radiologia.png'),
    ('Curso de Primeiros Socorros', 3, 'primeiros-socorros' , 'https://i.postimg.cc/3k9fxNSY/Curso-de-Primeiros-Socorros.png'),
    ('Curso de Massoterapia', 3, 'massoterapia', 'https://i.postimg.cc/rRWYV9bP/Curso-de-Massoterapia.png'),
    ('Curso de Farmácia Hospitalar', 3, 'farmacia-hospitalar', 'https://i.postimg.cc/w3SSC1Pr/Curso-de-Farm-cia-Hospitalar.png'),
    ('Curso de Auxiliar de Odontologia', 3, 'auxiliar-de-odontologia', 'https://i.postimg.cc/cg5NgTF1/Curso-de-Auxiliar-de-Odontologia.png'),
    ('Curso de Gerenciamento de Resíduos em Saúde', 3, 'gerenciamento-de-residuos-em-saude', 'https://i.postimg.cc/4KNM6V7Y/Curso-de-Gerenciamento-de-Res-duos-em-Sa-de.png'),
    ('Curso de Nutrição Básica', 3, 'nutricao-basica', 'https://i.postimg.cc/xqbZ30C3/Curso-de-Nutri-o-B-sica.png'),
    /**/
    ('Curso de Desenho Artístico', 4, 'desenho-artistico', 'https://i.postimg.cc/rK4Ls1xc/Curso-de-Desenho-Art-stico.png'),
    ('Curso de Fotografia Digital', 4, 'fotografia-digital', 'https://i.postimg.cc/ppzgR2ML/Curso-de-Fotografia-Digital.png'),
    ('Curso de Design Gráfico', 4, 'design-grafico', 'https://i.postimg.cc/hXbWbK25/Curso-de-Design-Gr-fico.png'),
    ('Curso de Edição de Vídeo', 4, 'edicao-de-video', 'https://i.postimg.cc/94m3LsSF/Curso-de-Edi-o-de-V-deo.png'),
    ('Curso de Escultura', 4, 'escultura', 'https://i.postimg.cc/vD1J2rP9/Curso-de-Escultura.png'),
    ('Curso de Ilustração Digital', 4, 'ilustracao-digital', 'https://i.postimg.cc/jwDF9ThK/Curso-de-Ilustra-o-Digital.png'),
    ('Curso de Animação 2D', 4, 'animacao-2d', 'https://i.postimg.cc/Z02SJ79V/Curso-de-Anima-o-2-D.png'),
    ('Curso de Pintura em Tela', 4, 'pintura-em-tela', 'https://i.postimg.cc/svY0bw5B/Curso-de-Pintura-em-Tela.png'),
    /**/
    ('Curso de Pedagogia', 5, 'pedagogia', 'https://i.postimg.cc/TKTHxgct/Curso-de-Pedagogia.png'),
    ('Curso de Técnicas de Ensino', 5, 'tecnicas-de-ensino', 'https://i.postimg.cc/686zgw9S/Curso-de-T-cnicas-de-Ensino.png'),
    ('Curso de Psicologia da Educação', 5, 'psicologia-da-educacao', 'https://i.postimg.cc/R3DPw8xY/Curso-de-Psicologia-da-Educa-o.png'),
    ('Curso de Alfabetização e Letramento', 5, 'alfabetizacao-e-letramento', 'https://i.postimg.cc/62QXpFL1/Curso-de-Alfabetiza-o-e-Letramento.png'),
    ('Curso de Gestão Escolar', 5, 'gestao-escolar', 'https://i.postimg.cc/qNrW79pX/Curso-de-Gest-o-Escolar.png'),
    ('Curso de Didática', 5, 'didatica', 'https://i.postimg.cc/McdCNd20/Curso-de-Did-tica.png'),
    ('Curso Livre de Inglês', 5, 'livre-de-ingles', 'https://i.postimg.cc/qzxj1gdy/Curso-Livre-de-Ingl-s.png'),
    ('Curso de Educação Inclusiva', 5, 'educacao-inclusiva', 'https://i.postimg.cc/Q9C231h2/Curso-de-Educa-o-Inclusiva.png');



    INSERT INTO TABELA_CURSO_INSTITUICAO (
      CURSO_ID,
      INSTITUICAO_ID
    )
    VALUES 
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 2),
    (6, 2),
    (7, 2),
    (8, 2),
    (9, 3),
    (10, 3),
    (11, 3),
    (12, 3),
    (13, 4),
    (14, 4),
    (15, 4),
    (16, 4),
    (17, 5),
    (18, 5),
    (19, 5),
    (20, 5),
    (21, 6),
    (22, 6),
    (23, 6),
    (24, 6),
    (25, 7),
    (26, 7),
    (27, 7),
    (28, 7),
    (29, 8),
    (30, 8),
    (31, 8),
    (32, 8),
    (33, 9),
    (34, 9),
    (35, 9),
    (36, 9),
    (37, 10),
    (38, 10),
    (39, 10),
    (40, 10);
  `);
});

export default db;
