import { Router } from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getRandomProduct,
    getProductsBySearch
} from '../controllers/productController';

const router = Router();

router.get('/', getAllProducts);
router.get('/randomProduct', getRandomProduct);
router.get('/search', getProductsBySearch);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;