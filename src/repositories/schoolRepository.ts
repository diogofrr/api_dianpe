import db from '../database';

class SchoolRepository {
  async getAllSchools() {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT
          ID,
          NOME_INSTITUICAO,
          SITE,
          IMG_LOGO_URL,
          INSTITUICAO_SLUG
        FROM
          TABELA_INSTITUICAO`,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  async getSchoolById(id: string) {
    return new Promise((resolve, reject) => {
      db.get(
        `SELECT
          *
        FROM
          TABELA_INSTITUICAO
        WHERE
          ID = ?`,
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  }

  async getSchoolByCategory(category: string) {
    return new Promise<any[]>((resolve, reject) => {
      const query = `
        SELECT
          TI.nome_instituicao,
          TI.telefone,
          TI.site,
          TI.instituicao_slug,
          TI.img_logo_url,
          TI.email,
          TI.id_categoria,
          TI.rua,
          TI.bairro,
          TI.num,
          TI.complemento,
          TI.cidade,
          TI.uf
        FROM
          TABELA_INSTITUICAO TI
        INNER JOIN
          TABELA_CATEGORIA TC
        ON TI.id_categoria = TC.id
        WHERE
          TC.nome_categoria LIKE %?%;
      `;

      db.all(query, [category], (error, rows) => {
        if(error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default new SchoolRepository();
