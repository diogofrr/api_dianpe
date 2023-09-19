import { Request, Response } from "express";
import courseRepository from "../repositories/courseRepository";

class CourseController {
	async listCourses(req: Request, res: Response) {
		try {
			const courses = await courseRepository.getAllCourses();
			const categories = await courseRepository.getAllCategories();
      const coursesByCategory: any = {};

      courses.forEach((course) => {
        const category = course.CATEGORIA_SLUG
				
        if (!coursesByCategory[category]) {
					const categoryEqual = categories.find((category) => category.CATEGORIA_SLUG === course.CATEGORIA_SLUG)

					coursesByCategory[category] = {
						NOME_CATEGORIA_F: categoryEqual.NOME_CATEGORIA,
						BANNER_CURSO: categoryEqual.IMG_URL,
						CURSOS: []
					}
        }
				
				delete course.NOME_CATEGORIA;
				coursesByCategory[category].CURSOS.push(course);
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

	async getCourseByName(req: Request, res: Response) {
		try {
			const { query } = req.query;

			if (!query) {
				throw new Error();
			}

			const courses = await courseRepository.searchCourse(query!.toString());

			if (!courses) {
				res.status(404).json({ error: 'Pesquisa sem resultados.' })
			}

			res.status(200).json(courses);
		} catch(error) {
			console.log(error)
			res.status(500).json({ error: 'Erro ao obter os dados dos cursos.' });
		}
	}
}

export default new CourseController();
