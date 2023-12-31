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

	async getAllCourses() {
		return new Promise<any[]>((resolve, reject) => {
			const query = `
				SELECT
					TC.id,
					TC.nome,
					TCC.categoria_slug,
					TC.curso_slug,
					TC.img_url
				FROM
					TABELA_CURSO TC
				INNER JOIN
					TABELA_CATEGORIA_CURSO TCC
				ON TC.id_categoria_curso = TCC.id
			`;

			db.all(query, [], (error, rows) => {
				if (error) {
					reject(error);
				} else {
					resolve(rows);
				}
			});
		});
	}

	async getCourseById(id: string) {
		return new Promise<any>((resolve, reject) => {
			const query = `
				SELECT
					TC.id,
					TC.nome,
					TC.id_categoria_curso,
					TCC.nome_categoria,
					TCC.categoria_slug,
					TC.curso_slug,
					TC.img_url,
					TC.descricao
				FROM
					TABELA_CURSO TC
				INNER JOIN
					TABELA_CATEGORIA_CURSO TCC
				ON TC.id_categoria_curso = TCC.id
				WHERE
					TC.id = ?
			`;

			db.get(query, [id], (error, row) => {
				if(error) {
					reject(error);
				} else {
					resolve(row);
				}
			})
		});
	}

	async getCourseByCategory(category: string) {
		return new Promise<any[]>((resolve, reject) => {
			const query = `
				SELECT
					TC.id,
					TC.nome,
					TC.id_categoria_curso,
					TCC.nome_categoria,
					TCC.img_url,
					TCC.categoria_slug,
					TC.curso_slug,
					TC.img_url
					TC.descricao
				FROM
					TABELA_CURSO TC
				INNER JOIN
					TABELA_CATEGORIA_CURSO TCC
				ON TC.id_categoria_curso = TCC.id
				WHERE
					TCC.nome_categoria IN (?)
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

	async getAllCategories() {
		return new Promise<any[]>((resolve, reject) => {
			const query = `
				SELECT
					*
				FROM
					TABELA_CATEGORIA_CURSO
				`;

			db.all(query, [], (error, rows) => {
				if (error){
					reject(error);
				} else {
					resolve(rows);
				}
			})
		})
	}

	searchCourse(query: string) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT
					ID,
					NOME
				FROM
					TABELA_CURSO
				WHERE
					NOME
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

	async getSchoolsByCourseId(courseId: string) {
		return new Promise<any[]>((resolve, reject) => {
			const query = `
				SELECT
				I.ID,
				I.NOME_INSTITUICAO,
				I.IMG_LOGO_URL,
				I.INSTITUICAO_SLUG
				FROM
					TABELA_INSTITUICAO I
				INNER JOIN
					TABELA_CURSO_INSTITUICAO CI ON I.ID = CI.INSTITUICAO_ID
				WHERE
					CI.CURSO_ID = ?
			`;
	
			db.all(query, [courseId], (error, rows) => {
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
