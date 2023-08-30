import db from '../database';

class CourseRepository {
  async getCoursesBySchoolId(schoolId: string) {
    return new Promise<any[]>((resolve, reject) => {
      const query = `
        SELECT
          C.*,
          CC.NOME_CATEGORIA,
          CC.CATEGORIA_SLUG
        FROM
          TABELA_CURSO C
        INNER JOIN
          TABELA_CURSO_INSTITUICAO CI ON C.ID = CI.CURSO_ID
        INNER JOIN
          TABELA_INSTITUICAO I ON CI.INSTITUICAO_ID = I.ID
        INNER JOIN
          TABELA_CATEGORIA_CURSO CC ON C.ID_CATEGORIA_CURSO = CC.ID
        WHERE
          I.ID = ?
      `;

      db.all(query, [schoolId], (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default new CourseRepository();
