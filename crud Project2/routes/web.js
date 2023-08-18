import express from 'express';
import studentController from '../controllers/studentController.js';
const router = express.Router();

router.get('/', studentController.getAllDoc)
router.post('/', studentController.createDoc)
router.post('/update/:id', studentController.updateDocById)
router.post('/delete/:id', studentController.DeleteDocById)
router.get('/edit/:id', studentController.editDocById)

export default router;