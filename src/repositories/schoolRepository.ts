import db from '../database';

class SchoolRepository {
  getAllSchools() {
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

  getSchoolById(id: string) {
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

  searchSchool(query: string) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT
          ID,
          NOME_INSTITUICAO
        FROM 
          TABELA_INSTITUICAO 
        WHERE 
          NOME_INSTITUICAO
        LIKE ?;`,
        [`%${query}%`],
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
}


export default new SchoolRepository();
