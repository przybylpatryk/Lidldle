import { Router } from 'express';
import {
    getAllDaily,
    addToDaily,
    deleteAllDaily,
    deleteDailyById,
    addRandomDaily,
} from '../controllers/dailyController';

const router = Router();

router.get('/', getAllDaily);
router.post('/', addToDaily);
router.delete('/', deleteAllDaily);
router.delete('/:product_id', deleteDailyById);
router.post('/random', addRandomDaily);

export default router;