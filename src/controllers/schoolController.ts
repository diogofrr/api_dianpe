import { Request, Response } from 'express';
import schoolRepository from '../repositories/schoolRepository';
import courseRepository from '../repositories/courseRepository';

class SchoolController {
  async listSchools(req: Request, res: Response) {
    try {
      const schools = await schoolRepository.getAllSchools();

      res.status(200).json({ schools });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter a lista de escolas.' });
    }
  }

  async getSchoolById(req: Request, res: Response) {
    try {
      const id = req.params.id; // Pega o ID da rota
      const school = await schoolRepository.getSchoolById(id);

      if (!school) {
        res.status(404).json({ error: 'Escola não encontrada.' });
        return;
      }

      res.status(200).json({ school });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter os dados da escola.' });
    }
  }

  async getSchoolWithCourses(req: Request, res: Response) {
    const schoolId = req.params.id;

    try {
      const school = await schoolRepository.getSchoolById(schoolId);

      if (!school) {
        return res.status(404).json({ error: 'Escola não encontrada.' });
      }

      const courses = await courseRepository.getCoursesBySchoolId(schoolId);

      const coursesByCategory: { [categorySlug: string]: any[] } = {};

      courses.forEach((course) => {
        if (!coursesByCategory[course.CATEGORIA_SLUG]) {
          coursesByCategory[course.CATEGORIA_SLUG] = [];
        }
        coursesByCategory[course.CATEGORIA_SLUG].push(course);
      });

      const schoolWithCourses = {
        ...school,
        coursesByCategory,
      };

      res.status(200).json(schoolWithCourses);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar dados da escola.' });
    }
  }
}

export default new SchoolController();
