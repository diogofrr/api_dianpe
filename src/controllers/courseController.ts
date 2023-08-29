import { Request, Response } from 'express';
import courseRepository from '../repositories/courseRepository';
import { ICourseData } from '../../types/database';

class CourseController {
  async listCoursesByCategory(req: Request, res: Response) {
    try {
      const courses = await courseRepository.getAllCourses() as ICourseData[]; // Obter todos os cursos

      // Organizar cursos por categoria
      const coursesByCategory: { [category: string]: any[] } = {};

      courses.forEach((course) => {
        if (!coursesByCategory[course.CATEGORIA]) {
          coursesByCategory[course.CATEGORIA] = [];
        }
        coursesByCategory[course.CATEGORIA].push(course);
      });

      res.status(200).json(coursesByCategory);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os cursos por categoria.' });
    }
  }
}

export default new CourseController();
