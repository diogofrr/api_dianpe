import express from 'express';
import schoolController from '../controllers/schoolController';

const router = express.Router();

router.get('/escolas', schoolController.listSchools);
router.get('/escolas/pesquisa?', schoolController.getSchoolByName);
router.get('/escolas/:id', schoolController.getSchoolWithCourses);

export default router;
