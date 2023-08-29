import express from 'express';
import courseController from '../controllers/courseController';

const router = express.Router();

// Rota para listar cursos
router.get('/cursos', courseController.listCoursesByCategory);

export default router;
