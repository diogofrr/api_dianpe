import { Router } from "express";
import courseController from "../controllers/courseController";

const router = Router();

router.get('/cursos', courseController.listCourses);
router.get('/cursos/pesquisa?', courseController.getCourseByCategory);
router.get('/cursos/:id', courseController.getCourseById);

export default router;