import { Request, Response } from "express";
import courseRepository from "../repositories/courseRepository";

class CourseController {
	async listCourses(req: Request, res: Response) {
		try {
			const courses = await courseRepository.getAllCourses();
      const coursesByCategory: any = {};

      courses.forEach((course) => {
        const category = course.CATEGORIA_SLUG
				
        if (!coursesByCategory[category]) {
					coursesByCategory[category] = {
						NOME_CATEGORIA_F: course.NOME_CATEGORIA,
						CURSOS: []
					}
        }

				if (coursesByCategory[category].CURSOS.length < 5) {
					delete course.NOME_CATEGORIA;
					coursesByCategory[category].CURSOS.push(course);
				}

      });

      res.status(200).json({ CURSOS_POR_CATEGORIA: coursesByCategory });
		} catch(error) {
			res.status(500).json({error: 'Erro ao obter lista de cursos.'});
		}
	}

	async getCourseById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const course = await courseRepository.getCourseById(id);

			if(!course) {
				res.status(404).json( { error: 'Curso não encontrado.' });
				return;
			}
			
			res.status(200).json({ course });
		} catch(error) {
			res.status(500).json({ error: 'Erro ao obter os dados do curso.' });
		}
	}

	async getCourseByCategory(req: Request, res: Response) {
		try {
			const { categoria } = req.query;
			
			if(!categoria) {
				res.status(400).json({ error: 'Erro ao obter categoria.' });
			}

			const courses = await courseRepository.getCourseByCategory(categoria!.toString());

			res.status(200).json({ courses });
		} catch(error) {
			res.status(500).json({ error: 'Erro ao obter os dados dos cursos.' });
		}
	}
}

export default new CourseController();
