import { Request, Response } from "express";
import courseRepository from "../repositories/courseRepository";

class CourseController {
	async listCourses(req: Request, res: Response) {
		try {
			const courses = await courseRepository.getAllCourses();
			const categories = await courseRepository.getAllCategories();
      const coursesByCategory: any = {};
			let coursesKeys;
			const coursesArray: any[] = []

      courses.forEach((course) => {
        const category = course.CATEGORIA_SLUG
				
        if (!coursesByCategory[category]) {
					const categoryEqual = categories.find((category) => category.CATEGORIA_SLUG === course.CATEGORIA_SLUG)

					coursesByCategory[category] = {
						NOME_CATEGORIA_F: categoryEqual.NOME_CATEGORIA,
						CURSOS: []
					}
        }
				
				delete course.NOME_CATEGORIA;
				coursesByCategory[category].CURSOS.push(course);
      });

			coursesKeys = Object.keys(coursesByCategory);
			
			coursesKeys.forEach((key) => {
				coursesArray.push(coursesByCategory[key])
			})

      res.status(200).json({ CURSOS_POR_CATEGORIA: coursesArray });
		} catch(error) {
			res.status(500).json({error: 'Erro ao obter lista de cursos.'});
		}
	}

	async getCourseById(req: Request, res: Response) {
		try {
			const { id } = req.params;

			if (!id) throw new Error();

			const course = await courseRepository.getCourseById(id);
			const schools = await courseRepository.getSchoolsByCourseId(id);

			if(!course) {
				res.status(404).json( { error: 'Curso não encontrado.' });
				return;
			}
			
			res.status(200).json({ CURSO: course, ESCOLAS: schools });
		} catch(error) {
			console.log(error)
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
