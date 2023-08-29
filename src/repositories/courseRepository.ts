import db from '../database';

class CourseRepository {
  getAllCourses() {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT
          *
        FROM
          TABELA_CURSO`,
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
}

export default new CourseRepository();
