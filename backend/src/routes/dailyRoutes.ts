import { Router } from 'express';
import {
    getAllDaily,
    addToDaily,
    deleteAllDaily,
    deleteDailyById,
    addRandomDaily, getUserGuesses, deleteGuesses, deleteImageGuesses, addGuess, getUserImageGuesses, addImageGuess,
} from '../controllers/dailyController';

const router = Router();

router.get('/', getAllDaily);
router.get('/guesses/:id', getUserGuesses);
router.get('/imageGuesses/:id', getUserImageGuesses);
router.post('/guesses', addGuess);
router.post('/imageGuesses', addImageGuess);
router.post('/', addToDaily);
router.delete('/', deleteAllDaily);
router.delete('/deleteGuesses',deleteGuesses);
router.delete('/deleteImageGuesses', deleteImageGuesses);
router.delete('/:product_id', deleteDailyById);
router.post('/random', addRandomDaily);

export default router;