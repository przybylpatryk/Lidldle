import express from 'express';
import type { Express } from 'express';
import productRoutes from './routes/productRoutes';
import dailyRoutes from './routes/dailyRoutes';
import { fileURLToPath } from 'url';
import {cleanOldDaily, cleanOldGuesses} from "./controllers/dailyController";
import cors from 'cors';
import path from 'path';

const app: Express = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/images', express.static(path.join(__dirname, '../fixtures/images')));

app.use('/products', productRoutes);
app.use('/daily', dailyRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Nie znaleziono endpointu' });
});

cleanOldGuesses().catch((err) => {
    console.log(err);
});
cleanOldDaily().catch((err) => {
    console.log(err);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` App is running on http://localhost:${PORT}`);
});