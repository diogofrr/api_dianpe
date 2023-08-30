import express from 'express';
import schoolController from '../controllers/schoolController';

const router = express.Router();

// Rota para listar escolas
router.get('/escolas', schoolController.listSchools);
router.get('/escolas/:id', schoolController.getSchoolWithCourses);

export default router;
